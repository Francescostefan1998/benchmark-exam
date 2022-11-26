import { Component } from "react";
import { Spinner } from "react-bootstrap";
import Commentarea from "./Commentarea";
class WatchIt extends Component {
  state = {
    movie: [],
    isLoading: true,
  };
  //http://www.omdbapi.com/?apikey=b5b46d60&s=harry%20potter
  fetchMovie = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=b5b46d60&s=movie%20${this.props.horror}`
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          movie: data.Search,
          isLoading: false,
        });
        console.log("fetched!");
        console.log(data.Search);
      } else {
        console.log("error fetching");
        alert("error while fetching");
        this.setState({
          isLoading: false,
        });
      }
    } catch (error) {
      console.log("error");
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    console.log("component did mount");

    setTimeout(() => {
      this.fetchMovie();
    }, 1500);
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
      <div className="container-fluid">
        <div className="movie-gallery m-2">
          <h5 className="text-light mt-2 mb-2">{this.props.title}</h5>
          {this.state.isLoading && (
            <Spinner
              animation="border"
              role="status"
              className="custom-spinner-color"
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
          <div
            id="watch-it-again"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="movie-row">
                  <div className="row">
                    {this.state.movie.slice(0, 6).map((r) => (
                      <div className="col-md-2">
                        <img
                          className="movie-cover"
                          src={r.Poster}
                          onClick={(r) => this.onselected(r.target)}
                        />
                        {this.state.selected && <Commentarea asin={r.imdbID} />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="movie-row">
                  <div className="row">
                    {this.state.movie.slice(0, 6).map((r) => (
                      <div className="col-md-2">
                        <img className="movie-cover" src={r.Poster} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#trending-now"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#trending-now"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WatchIt;
