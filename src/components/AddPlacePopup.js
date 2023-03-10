import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [place, setPlace] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: place,
      link: link,
    });
  }

  function handleChangePlace(e) {
    setPlace(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm 
        onSubmit = {handleSubmit}
        onClose={props.onClose}
        isOpen = {props.isOpen}
        name = 'add-element'
        title = 'Новое место'
        buttonText = 'Создать'
        children = {
          <>
            <input id="place-input" value={place} onChange={handleChangePlace} required type="text" name="name" className="popup__input popup__input_type_place" placeholder="Название" minLength="2" maxLength="30" />
            <p className="popup__input-error place-input-error"></p>
            <input id="link-input" value={link} onChange={handleChangeLink} required type="url" name="link" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" />
            <p className="popup__input-error link-input-error"></p>
          </>
        }
      />
  )
}

export default AddPlacePopup;