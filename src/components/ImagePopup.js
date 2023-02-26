import React from "react";

function ImagePopup({card, link, name, onClose}) {
  
  return (
    <section className={`popup popup_image ${card ? 'popup_opened' : ''}`}>
      <div className="popup__relative">
        <img className="popup__img" alt="" src={`${link}`} />
        <h2 className="popup__img-title">{name}</h2>
        <button className="popup__close" type="button" onClick={onClose}></button>
      </div>
    </section>
  )
}

export default ImagePopup;