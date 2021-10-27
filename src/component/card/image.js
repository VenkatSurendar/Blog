import React from "react";

const images = [
  "../media/1.png",
  "../media/2.png",
  "../media/3.png",
  "../media/4.png",
  "../media/5.png",
];

function Image() {
  return (
    <div>
      {images.map((image) => (
        <img src={image} key={image} />
      ))}
    </div>
  );
}

export default Image;
