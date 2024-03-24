# Import make_response
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import cv2
from ultralytics import YOLO
from ultralytics.utils.plotting import Annotator
import cvzone
from collections import Counter  
import numpy as np
import tempfile

app = Flask(__name__)
CORS(app)

model = YOLO("yolov8s.pt")

my_file = open("coco.txt", "r")
data = my_file.read()
class_list = data.split("\n")

def check_mime_type(file):
    # Add more MIME types if needed
    allowed_types = ['image/jpeg', 'image/png', 'image/jpg']
    if file.mimetype not in allowed_types:
        return False
    return True


def process_image(image_stream):
    nparr = np.frombuffer(image_stream, np.uint8)

    image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    def object(frame):
        object_classes = []
        interested_classes = ["car", "truck", "bus"]

        results = model.predict(frame)
        result = results[0]
        boxes = results[0].boxes.xyxy.tolist()
        # print("Boxes: ", boxes)
        classes = results[0].boxes.cls.tolist()

        InterestedNames = {
            1: "car",
            2: "truck",
            3: "bus"
        }
        InterestedNames = results[0].names

        confidences = results[0].boxes.conf.tolist()
        annotator = Annotator(frame, line_width=2,
                              example=str(InterestedNames))

        for box, cls, conf in zip(boxes, classes, confidences):
            class_name = InterestedNames[int(cls)]
            if class_name in interested_classes:
                label1 = class_name
                cords1 = [round(x) for x in box]
                prob1 = round(conf, 2)
                print("Object type: ", label1)
                print("Probability: ", prob1)
                print("Coordinate: ", cords1)
                print("_")
                object_classes.append(label1)
                annotator.box_label(box, class_name, (255, 42, 4))

        for box, cls, conf in zip(boxes, classes, confidences):
            annotator.box_label(box, InterestedNames[int(cls)], (255, 42, 4))

        return object_classes

    def count_objects_in_image(object_classes, image):
        counter = Counter(object_classes)
        print("Object Count in Image:")
        print(counter)
        n = 0
        for obj, count in counter.items():
            print(f"{obj}: {count}")
            cvzone.putTextRect(image, f'{obj}', (50, 50+n), 1, 1,
                               colorT=(255, 255, 255), colorR=(0, 0, 0), border=2)
            cvzone.putTextRect(image, f'{count}', (150, 50+n), 1, 1)

            n = n+50

        return image

    img = cv2.resize(image, (600, 600))
    object_classes = object(img)
    count_objects_in_image(object_classes, img)
    return img

    # -------------------------------------------------------------------# 

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file and check_mime_type(file):
        image_stream = file.read()
 
        processed_image = process_image(image_stream)

        with tempfile.NamedTemporaryFile(suffix='.jpg', delete=False) as temp_file:
            cv2.imwrite(temp_file.name, processed_image)

        return send_file(temp_file.name, mimetype='image/jpeg')

    else:
        return jsonify({'error': 'Invalid file type or MIME type'}), 400
    
if __name__ == '__main__':
    app.run(debug=True)
