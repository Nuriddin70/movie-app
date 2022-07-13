import React from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

export default class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=329ffa13&s=panda")
      .then(response => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }


  searchMovie = (str, type = 'all') => {
    fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=${str}${type !== 'all' ? `$type=${type}` : ''}`)
      .then(response => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }
  
  render() {
    return (
      <div className="container contetn">
        <Search searchMovie={this.searchMovie}/>
        {this.state.movies.length ? (
          <Movies key={this.state.movies.imbdID} movies={this.state.movies} />
        ) : (
          <Loader/>
        )}
      </div>
    );
  }
}
