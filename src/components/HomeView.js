import React from "react";
import { Link } from "react-router-dom";

class HomeView extends React.Component {
  constructor(props) {
    super(props);
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
        this.setState({
          pokemons: data.results,
        });
      });
  }

  render() {
    const { pokemons } = this.state;
    return (
      <>
        <div className="w-full flex justify-center">
          <input
            placeholder="Enter pokemon here..."
            className="mt-10 p-2 border-blue-500 border-2"
            // value={this.state.text}
            // onChange={this.handleChange}
          ></input>
        </div>
        <div className="mt-10 p4 flex flex-wrap justify-center">
          <div className="ml-4 text-2px text-blue-400">
            {pokemons.map((item, idx) => (
              <Link
                to={{
                  pathname: `/about/${idx}`,
                  state: item.name,
                }} 
              >
                {item.name}{" "}
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  }
}

// HomeView.propTypes = {};

// HomeView.defaultProps = {};

export default HomeView;
