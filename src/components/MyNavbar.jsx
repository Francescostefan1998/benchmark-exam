import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Component } from "react";
import FilterBook from "./FilterBook";

class MyNavbar extends Component {
  state = {
    search: "",
    movie: [],
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
          search: "",
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

  onChangehandler = (value, fieldToSet) => {
    this.setState({
      search: this.state.search,
      [fieldToSet]: value,
    });
    console.log(this.state.search);
  };
  render() {
    return (
      <Navbar bg="light" expand="lg" id="costumizeNavbar" className="top-s">
        <Navbar.Brand href="#home">
          <img
            src="https://th.bing.com/th/id/R.d01a8fbdf7bbb4d9dc936d06e151039f?rik=M%2fRoSy9w3784Dg&riu=http%3a%2f%2fwww.tubefilter.com%2fwp-content%2fuploads%2f2016%2f07%2fNetflix_logo.jpg&ehk=P%2b64IrAZDD9owhjJ6jQ9ubpeHNhDoTjfAZZ0VABXp3E%3d&risl=&pid=ImgRaw&r=0"
            id="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" className="navtext">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="navtext">
              TvShows
            </Nav.Link>
            <Nav.Link href="#" className="navtext">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="navtext">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="navtext">
              My List
            </Nav.Link>
          </Nav>
          <Form className="row">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 col-4"
              value={this.state.search}
              onChange={(e) => this.onChangehandler(e.target.value, "search")}
            />
            <div className="none">
              {this.state.movie
                .filter((movie) => movie.Title.includes(this.state.search))
                .map((filteredtitle) => (
                  <li>{filteredtitle.Title}</li>
                ))}
            </div>
            <img
              src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png"
              alt="user-avatar"
              className="adapt"
            />

            <NavDropdown id="basic-nav-dropdown" className="navtext">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Form>
        </Navbar.Collapse>
      </Navbar> /*
      {thi.state.movie}
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="http://ubeytdemir.me/netflix-ui">
        <img
          src="https://th.bing.com/th/id/R.d01a8fbdf7bbb4d9dc936d06e151039f?rik=M%2fRoSy9w3784Dg&riu=http%3a%2f%2fwww.tubefilter.com%2fwp-content%2fuploads%2f2016%2f07%2fNetflix_logo.jpg&ehk=P%2b64IrAZDD9owhjJ6jQ9ubpeHNhDoTjfAZZ0VABXp3E%3d&risl=&pid=ImgRaw&r=0"
          id="logo"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="http://ubeytdemir.me/netflix-ui">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Tv Shows
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Movies
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Recently Added
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              My List
            </a>
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search icon"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              KIDS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bell-fill icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
            </a>
          </li>

          <li class="nav-item">
            <div class="btn-group">
              <button
                type="button"
                class="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="./assets/avatar.png" id="avatar" />
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <a
                    class="dropdown-item"
                    href="http://ubeytdemir.me/netflix-ui/profile.html"
                  >
                    <div class="d-flex align-items-center">
                      <img src="./assets/avatar.png" id="avatar-small" />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="http://ubeytdemir.me/netflix-ui/profile.html"
                  >
                    Manage Profiles
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="http://ubeytdemir.me/netflix-ui/accounts.html"
                  >
                    Account
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Help Center
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Signout Netflix
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>*/
    );
  }
}

export default MyNavbar;
