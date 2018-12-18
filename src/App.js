import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
    greeting: 'Hello!',
    movies: [
      {
        title:"Matrix",
        poster:"https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg"
      },
      {
        title:"Full Metal Jacket",
        poster:"https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
      },
      {
        title:"Oldboy",
        poster:"https://images-na.ssl-images-amazon.com/images/I/91ONQ8FNHJL._SY445_.jpg"
      },
      {
        title:"Star Wars",
        poster:"https://imgc.allpostersimages.com/img/print/u-g-F8G58H0.jpg?w=300&h=450"
      }
    ]
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "Trainspotting",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHoWC2d7UF6xrRP5dlloaB_Hmbn5uvfNkJVBCAzgGK-h7b4Rn"
          }
        ]
      })
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
