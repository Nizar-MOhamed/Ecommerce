import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBoxNavigator">
        <div className="descriptionNavBox">Description</div>
        <div className="descriptionNavBoxFade">Reviews(122)</div>
      </div>
      <div className="descriptionBoxDescription">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum et quas
          natus omnis architecto perspiciatis cum! Sequi aspernatur, obcaecati
          est eum, dolores blanditiis fugit accusantium temporibus earum
          deserunt explicabo doloremque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae
          consequatur ab magnam incidunt officiis dolore quis distinctio ad
          harum facilis tempore aspernatur qui deleniti, error perferendis
          recusandae voluptatem corporis.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
