import WatchIt from "./WatchIt";
import { Component } from "react";

class Commentarea extends Component {
  state = {
    movie: {},
    selected: false,
  };
  fetchMovie = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=b5b46d60&i=${this.props.asin}`
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          movie: data,
          selected: false,
        });
        console.log("fetched!");
        console.log(data.Search);
      } else {
        console.log("error fetching");
        alert("error fetching");
      }
    } catch (error) {
      console.log("error");
    }
  };

  componentDidMount() {
    console.log("component did mount");

    this.fetchMovie();
  }
  onselected = () => {
    if (this.state.selected === true) {
      this.setState({
        selected: false,
      });
    } else {
      this.setState({
        selected: true,
      });
    }
  };
  render() {
    return (
      <div onClick={(r) => this.onselected(r.target)}>
        {this.state.selected && (
          <div className="commentpersonal">
            <div>{this.state.movie.Title}</div>
            <div>{this.state.movie.Released}</div>
            <div>{this.state.movie.Genre}</div>
            <div>
              {this.state.movie.Language}
              {""}
              {""}
              {""}
              {""}
              {""}
              <button className="success">Show less</button>
            </div>
          </div>
        )}
        {!this.state.selected && (
          <div>
            show more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>
        )}
      </div>
    );
  }
}

export default Commentarea;
