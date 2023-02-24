import React from "react";

function PopupWithForm(props) {
  

  return (
    <section className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
      <h2 className="popup__title">{props.title}</h2>
        <form name="popup" className={`popup__form popup__form-${props.name}`} noValidate>
          {props.children}
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </section>
  );
}

export default PopupWithForm;