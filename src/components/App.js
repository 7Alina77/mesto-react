import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
  <div className="page">
    <Header />
    <Main />
    <Footer />
    <section className="popup popup_edit">
      <div className="popup__container">
        <h2 className="popup__title">Редактировать профиль</h2>
        <form name="popup" className="popup__form popup__form-edit" novalidate>
          <input id="name-input" required type="text" name="title" className="popup__input popup__input_type_name" placeholder="Имя" minlength="2" maxlength="40" />
          <p className="popup__input-error name-input-error"></p>
          <input id="about-input" required type="text" name="about" className="popup__input popup__input_type_about" placeholder="О себе" minlength="2" maxlength="200" />
          <p className="popup__input-error about-input-error"></p>
          <button className="popup__save" type="submit">Сохранить</button>
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </section>
    <section className="popup popup_avatar">
      <div className="popup__container">
        <h2 className="popup__title">Обновить аватар</h2>
        <form name="popup" className="popup__form popup__form-add" novalidate>
          <input id="avatar-input" required type="url" name="avatar" className="popup__input popup__input_type_avatar" placeholder="Ссылка на картинку" />
          <p className="popup__input-error avatar-input-error"></p>
          <button className="popup__save popup__add" type="submit">Сохранить</button>
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </section>
    <section className="popup popup_add-element">
      <div className="popup__container">
        <h2 className="popup__title">Новое место</h2>
        <form name="popup" className="popup__form popup__form-add" novalidate>
          <input id="place-input" required type="text" name="name" className="popup__input popup__input_type_place" placeholder="Название" minlength="2" maxlength="30" />
          <p className="popup__input-error place-input-error"></p>
          <input id="link-input" required type="url" name="link" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" />
          <p className="popup__input-error link-input-error"></p>
          <button className="popup__save popup__add" type="submit">Создать</button>
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </section>
    <section className="popup popup_confirmation">
      <div className="popup__container">
        <h2 className="popup__title">Вы уверены?</h2>
        <form name="popup" className="popup__form popup__form-add" novalidate>
          <button className="popup__save popup__add" type="submit">Да</button>
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </section>
    <section className="popup popup_image">
      <div className="popup__relative">
        <img className="popup__img" alt="" src="#" />
        <h2 className="popup__img-title"></h2>
        <button className="popup__close" type="button"></button>
      </div>
    </section>
  </div>
  );
}

export default App;