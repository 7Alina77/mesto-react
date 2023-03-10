import React from 'react';
import {api} from '../utils/api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]= React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]= React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]= React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.handleGetUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((err) => {
      console.log(`Ошибка вывода карточек или данных юзера: ${err}`)
    });
  },[]);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      })
      .catch((err) => {
        console.log(`Ошибка лайка: ${err}`)
      });
}
 
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

  function handleUpdateUser(updUserData) {
    api.patchProfile(updUserData)
      .then((data) => {
        setCurrentUser(data)
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка обновления данных профиля: ${err}`)
      });
  }

  function handleUpdateAvatar(updAvatarData) {
    api.patchAvatar(updAvatarData)
      .then((data) => {
        setCurrentUser(data)
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка обновления аватара: ${err}`)
      });
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null)
  }

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main 
        cards = {cards}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        handleLikeClick ={handleCardLike}
      />
      <ImagePopup
        card = {selectedCard}
        onClose={closeAllPopups}
      />
      <Footer />
      <EditProfilePopup 
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
        onUpdateUser = {handleUpdateUser}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups} 
        onUpdateAvatar = {handleUpdateAvatar}
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
  </CurrentUserContext.Provider>
  );
}

export default App;