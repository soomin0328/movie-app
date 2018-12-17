import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster />
                <h1>hello this is a movie</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://images.store.hmv.com/app_/responsive/HMVStore/media/product/229437/01-229437.jpg?w=500"></img>
        )
    }
}
export default Movie;