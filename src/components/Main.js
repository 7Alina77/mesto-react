import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar , setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.handleGetUserInfo(), api.getInitialCards()])
      .then(([userData,cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-background" onClick={props.onEditAvatar}>
          <img className="profile__avatar" alt="аватарка" src={`${userAvatar}`} />
        </div>
        <div className="profile__input">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <article className="elements__item" key={card._id}>
            <button type="button" className="elements__trash"></button>
            <img className="elements__image" alt="" src={`${card.link}`} />
            <div className="elements__group">
              <p className="elements__title">{card.name}</p>
              <div className="elements__group_liked">
                <button type="submit" className="elements__like"></button>
                <p className="elements__like-count">{card.likes.length}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Main;