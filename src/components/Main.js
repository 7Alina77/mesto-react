import React from 'react';

function Main() {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-background">
          <img className="profile__avatar" alt="аватарка" src="<%=require('./images/avatar.jpg')%>" />
        </div>
        <div className="profile__input">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button className="profile__edit-button" type="button"></button>
          <p className="profile__about">Исследователь океана</p>
        </div>
        <button className="profile__add-button" type="button"></button>
      </section>
      <section className="elements">
        <template id="elements__item" className="card-template">
          <article className="elements__item">
            <button type="button" className="elements__trash"></button>
            <img className="elements__image" alt="" src="#" />
            <div className="elements__group">
              <p className="elements__title"></p>
              <div className="elements__group_liked">
                <button type="submit" className="elements__like"></button>
                <p className="elements__like-count"></p>
              </div>
            </div>
          </article>
        </template>
      </section>
    </main>
  );
};

export default Main;