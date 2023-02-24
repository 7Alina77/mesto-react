import React from "react";

function Card(card) {
  

  return (
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
  );
}

export default Card;