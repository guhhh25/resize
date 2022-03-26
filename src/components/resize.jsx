import Resizer from "react-image-file-resizer";
import React, {useEffect, useState} from "react";
export default function ImageResize(props){

  const resizeBackground = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      1080,
      1080,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64",
      1080,
      1080
    );
  });

  const resizePhoto = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      540,
      540,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64",
      540,
      540,
    );
  });

  const onChangeBackground = async (event) => {
    const background = document.querySelector('.background')
    try {
      const file = event.target.files[0];
      const image = await resizeBackground(file);
      
      background.src = image
    } catch (err) {
      console.log(err);
    }
  };

  const onChangePhoto = async (event) => {
    const photo = document.querySelector('.photo')
    try {
      const file = event.target.files[0];
      const image = await resizePhoto(file);
      photo.src = image
    } catch (err) {
      console.log(err);
    }
  };

    return(
      <div className="container">
        Frame
        <input type='file' name="backgroundImage" onChange={onChangeBackground}/>
        Photo
        <input type='file' name="Photo" onChange={onChangePhoto}/>
        <div className="containerback">
          <img className="background" src=""></img>
        </div>
        <div className="photoImage">
          <img src="" className="photo">
          </img>
        </div>
        
      </div>
    )
        
    


}