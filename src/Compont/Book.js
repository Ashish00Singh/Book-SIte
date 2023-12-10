import React from 'react'
import "../index.css"

export function Book(props) {
    console.log(props);
    const { title, author, img } = props;
    return (
      <article className="book container">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
      </article>
    );}