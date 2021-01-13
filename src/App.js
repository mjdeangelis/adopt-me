const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
