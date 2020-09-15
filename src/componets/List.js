import React from "react";
import Card from "./Card";
import STORE from "../store";
import "../App";
import "./List.css";

function List(props) {
  console.log(props.cards);
  return (
    <section className="List">
      <header className="List-header">{props.header}</header>
      <div className="List-cards">
        {props.cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            handleDelete={props.handleDelete}
          />
        ))}
        <button
          type="button"
          className="List-add-button"
          onClick={() => props.handleRandomCard(props.id)}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
