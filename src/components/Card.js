import React from "react";

function Card({_id, card, link, name, likes, onClick}) {
  
  function handleClick() {
    onClick(card);
  }

  return (
    <article className="elements__item" key={_id} onClick = {handleClick}>
      <button type="button" className="elements__trash"></button>
      <img className="elements__image" alt="" src={`${link}`} />
      <div className="elements__group">
        <p className="elements__title">{name}</p>
          <div className="elements__group_liked">
            <button type="submit" className="elements__like"></button>
            <p className="elements__like-count">{likes.length}</p>
          </div>
      </div>
    </article>
  );
}

export default Card;