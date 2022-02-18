import React from "react";

class HomeView extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      uldIdLookUp: {},
      text: "",
      // filteredPoke: this.updatePoke(),
    };
  }

  // updatePoke() {
  //   if (!this.state.text) {
  //     return [];
  //   }
  //   return this.state.pokemons.filter((poke) =>
  //     poke.name.includes(this.state.text)
  //   );
  // }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.state.pokemons = data.results;
      });
  }

  render() {
    return (
      <div className="w-full flex justify-center">
        <input
          placeholder="Enter pokemon here..."
          className="mt-10 p-2 border-blue-500 border-2"
        ></input>
        {this.state.pokemons.map((val, index) => {
          return <li key={index}>{val}</li>;
        })}
      </div>
    );
  }
}
// const API = "https://pokeapi.co/api/v2/pokemon?offset=0";
// const HomeView = () => (
//   <div className="w-full flex justify-center">
//     <input
//       type="text"
//       placeholder="Enter pokemon here..."
//       className="mt-10 p-2 border-blue-500 border-2"
//     ></input>
//   </div>
// );

// fetch(API)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// HomeView.propTypes = {};

// HomeView.defaultProps = {};

export default HomeView;
