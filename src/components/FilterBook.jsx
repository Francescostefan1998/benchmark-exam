import { Component } from "react";
import MyNavbar from "./MyNavbar";

class FilterBook extends Component {
  state = {
    movie: [],
    search: this.props.search,
  };

  fetchMovie = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=b5b46d60&s=movie"
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          movie: data.Search,
          search: this.props.search,
        });
        console.log("fetched!");
        console.log(data.Search);
        console.log(this.state.movie);
      } else {
        console.log("error fetching");
        alert("movie not found");
      }
    } catch (error) {
      console.log("error");
    }
  };

  componentDidMount() {
    console.log("component did mount");

    this.fetchMovie();
  }
  render() {
    return (
      <div>
        <h1>
          {" "}
          {this.state.movie
            .filter((movie) => movie.Title.includes(this.props.search))
            .map((filteredtitle) => (
              <li>{filteredtitle.Title}</li>
            ))}
        </h1>
      </div>
    );
  }
}

export default FilterBook;
