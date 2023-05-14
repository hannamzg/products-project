import React, { useState } from "react";

function About() {
  const [file, setFile] = useState(null);
  const [imagePath, setImagePath] = useState("");

  const handleOnChange = (event) => {
    setFile(event.target.files[0]); 
  };

  const handleOnClick = () => {
    const formData = new FormData();
    formData.append("image", file);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    }).then((response) => {
        response.json().then((data) => {
          console.log(data);
          setImagePath(data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleOnChange} />
      <button onClick={handleOnClick}>Upload</button>
      <img src={imagePath} alt="" />
    </div>
  );
}

export default About;
 