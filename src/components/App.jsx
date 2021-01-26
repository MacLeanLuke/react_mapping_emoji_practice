import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

//1 Create Entry Component

function createCard(emojiTerm) {
  return (
    <Card
      key={emojiTerm.id}
      img={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      {emojipedia.map(createCard)}
    </div>
  );
}

export default App;
