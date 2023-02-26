import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]= React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]= React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]= React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null)
 
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null)
  }

  return (
  <div className="page">
    <Header />
    <Main 
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}
    />
    <ImagePopup
      card = {selectedCard}
      onClose={closeAllPopups}
    />
    <Footer />
    <PopupWithForm 
      onClose={closeAllPopups} 
      isOpen = {isEditProfilePopupOpen} 
      name = 'edit'  
      title = 'Редактировать профиль'
      buttonText = 'Сохранить'
      children = {
        <>
          <input id="name-input" required type="text" name="title" className="popup__input popup__input_type_name" placeholder="Имя" minLength="2" maxLength="40" />
          <p className="popup__input-error name-input-error"></p>
          <input id="about-input" required type="text" name="about" className="popup__input popup__input_type_about" placeholder="О себе" minLength="2" maxLength="200" />
          <p className="popup__input-error about-input-error"></p>
        </>
      }
    />
    <PopupWithForm 
      onClose={closeAllPopups} 
      isOpen = {isEditAvatarPopupOpen} 
      name = 'avatar'  
      title = 'Обновить аватар' 
      buttonText = 'Сохранить'
      children = {
        <>
          <input id="avatar-input" required type="url" name="avatar" className="popup__input popup__input_type_avatar" placeholder="Ссылка на картинку" />
          <p className="popup__input-error avatar-input-error"></p>
        </>
      }
    />
    <PopupWithForm 
      onClose={closeAllPopups}
      isOpen = {isAddPlacePopupOpen}
      name = 'add-element'
      title = 'Новое место'
      buttonText = 'Создать'
      children = {
        <>
          <input id="place-input" required type="text" name="name" className="popup__input popup__input_type_place" placeholder="Название" minLength="2" maxLength="30" />
          <p className="popup__input-error place-input-error"></p>
          <input id="link-input" required type="url" name="link" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" />
          <p className="popup__input-error link-input-error"></p>
        </>
      }
    />
    <section className="popup popup_confirmation">
      <div className="popup__container">
        <h2 className="popup__title">Вы уверены?</h2>
        <form name="popup" className="popup__form popup__confirmation" noValidate>
          <button className="popup__save popup__add" type="submit">Да</button>
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </section>
  </div>
  );
}

export default App;