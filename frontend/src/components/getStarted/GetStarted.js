import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  styled,
  Button,
} from "@mui/material";
// icons
import { AddCircle as Add } from "@mui/icons-material";
import bannerImage from "../assets/ai.jpg"
import bannerImage2 from "../assets/Loading.jpg"


const Container = styled(Box)`
  margin: 0px 0px;
  padding: 0px 2px;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #ffffff;
`;

const InsideContainer = styled(Box)`
  width: 70%;
  margin: 50px 5px;
  padding: 5px 5px;
  border: 2px solid #3d3d3dde;
  border-radius: 14px;
  background: #ffffff;
  position: relative;
  overflow: hidden;
  // z-index:100;
`;

const StyledFileInput = styled(Box)`
  width: 100%;
  margin: 5px 0px;
  padding: 0px 0px;
  display:flex;
  justify-content: space-around;
  align-items:center;
  border: 2px solid #d5edff;
    border-radius: 10px;
  border-shadow: 0 5px 25px rgba(14, 21, 37, 0.8);
`;


const Image = styled('img')({
  width: '100%',
  height: '50vh',
  aspectRatio: "3/2",
  objectFit: 'contain',
  borderRadius: '14px',
});

function GetStarted() {
  const [file, setFile] = useState('');
  const [responseFile, setResponseFile] = useState('');


  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
 
 

  useEffect(() => {
    const getImage = async () => {
      try {
        if (file) {
          const data = new FormData();
          data.append('file', file);

          const response = await fetch('http://127.0.0.1:5000/upload', {
            method: 'POST',
            body: data,
          });

          if (response.ok) {
            const reader = response.body.getReader();
            const chunks = [];

            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              chunks.push(value);
            }

            const imageData = new Uint8Array(await new Blob(chunks).arrayBuffer());

            const imageUrl = URL.createObjectURL(new Blob([imageData]));

            setResponseFile(imageUrl);
          } else {
            console.error('Error:', response.statusText);
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getImage();
 
  }, [file]);

  const url1 = file ? URL.createObjectURL(file) : bannerImage;
  let url2 = responseFile ? responseFile : bannerImage2;

  // -=-==-=-=-=-=-=-=-=-=-=-=-=-=-=--=-===-= 
  return (
    <div>
      <Container>

        <InsideContainer>



          <StyledFileInput>
            <label
              name="image"
              htmlFor="file"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}
            >
              <Add fontSize="large" />
              Choose Image (Jpg/jpeg)
            </label>

            <input
              type="file"
              id="file"
              key="file"
              required
              style={{ display: "none" }}
              accept=".jpg"
              onChange={(e) => setFile(e.target.files[0])}
            />

          </StyledFileInput>



          {/* *-*--*-*-*-*-*-*-*-*--*img*-*-*-*-*-**-**-*-*-*/}
          <Image src={url1} alt="User img..." />


          <Image src={url2} alt="Response img..." />


          {/* *-*--*-*-*-*-*-*-*-*-**-*-*-*-*-**-*-*-*-*-**-**-*-*-*/}

          {showError && (
            <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
              {errorMessage || 'Please fill out all the required fields.'}

            </div>
          )}
          {/* *-*--*-*-*-*-*-*-*-*-**-*-*-*-*-**-*-*-*-*-**-**-*-*-*/}

          {/* <div style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}>
            <Button variant="contained" onClick={() => savePost()}>Publish</Button>
          </div> */}

        </InsideContainer>
      </Container>
    </div>
  )
}

export default GetStarted