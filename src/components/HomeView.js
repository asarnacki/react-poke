import React from "react";

class HomeView extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      isDataLoaded: false,
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
        // this.state.pokemons = data.results;
        this.setState({
          pokemons: data.results,
          uldIdLookup: data.results.reduce(
            (acc, cur, idx) => (acc = { ...acc, [cur.name]: idx + 1 }),
            {}
          ),
        });
      });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const { pokemons } = this.state;
    return (
      <><div className="w-full flex justify-center">
        <input
          placeholder="Enter pokemon here..."
          className="mt-10 p-2 border-blue-500 border-2"
          value={this.state.text} 
          onChange={this.handleChange}
        ></input>
      </div><div className="mt-10 p4 flex flex-wrap justify-center">
          <div className="ml-4 text-2px text-blue-400">
            {pokemons.map((item) => (
              <h1>{item.name}</h1>
            ))}
          </div>
        </div></>
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
