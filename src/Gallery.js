import React from "react";
import Img1 from "./assets/myWork/corn.png";
import Img2 from "./assets/myWork/covid.png";
import Img3 from "./assets/myWork/fight.png";
import Img4 from "./assets/myWork/man.png";
import Img5 from "./assets/myWork/metoo.png";
import Img6 from "./assets/myWork/prize.png";
import Img7 from "./assets/myWork/teeth.png";
import "./styles/gallery.css";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
  ];

  return (
    <>
      <div className="text">
        <h1>
          Not a professional artist... but love exploring ways of telling
          stories I'm passionate about 🎨{" "}
        </h1>
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img src={item.imgSrc} alt="" style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
