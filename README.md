# Traffic Vision

This Project is made as a part of internship project evaluation for Web Development role for IISC Banglore, India.

# Prototype
[You Tube | Video ( _Click Here_ )](https://youtu.be/FzVe_E0XTC4)

## 1.0 Problem Statement

Develop a web-based application that enables users to upload transportation-related images (such as traffic camera images) and perform object detection on those images.

## 2.0 What is Traffic Vision?

Traffic Vision is a full-stack web application that takes an image input, sends it to the backend via HTTP request. The Flask backend processes the image, identifies objects (specifically cars, trucks, and buses), counts them if already present, then sends the final image to the frontend for display.

# 3.0 System Requirements
* This app is not Dockerize due to my system incompatibility, ultralytics, collections, numpy.

- Python(3.11+)
- Modules Used for Python: flask,cv2 ,flask_cors
- Nodejs (21.1.0+)


# 4.0 Project Installation & Starting it

### 4.1: Install the project by giving a star to the project cloning this repo from your terminal.

```bash
https://github.com/abhyuday1212/CiSTUP-IISC-WebDevelopment.git
```


### 4.2: Go to the #CiSTUP-IISC folder, open VS-Code terminal and write this command.
 ``` bash
  cd backend
```

- Run the backend flask server.
 ``` bash
  python backend.py
```
 
### 4.4: Install the frontend dependencies.

```bash
  cd frontend
```

```bash
  npm install
```
- If any ERR ocured in terminal, then use this command and reinstall the dependencies using this line
```bash
  npm i --force
```

### 4.3: Start the frontend server
```bash
  npm start
```

## 5.0 Environment Variables
To run this project, you don't need to create any .env file explicitly.

</br>
  
## 6.0 Tech Stack

_Client:_ React , TailwindCSS ,Material UI .

_Server:_ Flask (Python) .

_Libraries used:_ OpenCV, numpy, Yolo


## 7.0 Support

For support, email me on -
Abhyuday Pratap singh : apsworks1212@gmail.com
</br>
 
 
