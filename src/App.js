import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Taz",
      animal: "Dog",
      breed: "Australian Terrier"
    }),
    React.createElement(Pet, {
      name: "Alfie",
      animal: "Dog",
      breed: "Cockapoo"
    }),
    React.createElement(Pet, {
      name: "Charlie",
      animal: "Dog",
      breed: "Labradoodle"
    }),
    React.createElement(Pet, {
      name: "Charlie",
      animal: "Dog",
      breed: "Labradoodle"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
