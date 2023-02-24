import React from "react";

function ImagePopup() {
  return (
    <section className="popup popup_image">
      <div className="popup__relative">
        <img className="popup__img" alt="" src="#" />
        <h2 className="popup__img-title"></h2>
        <button className="popup__close" type="button"></button>
      </div>
    </section>
  )
}

export default ImagePopup;