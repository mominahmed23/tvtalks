import React, { Component } from 'react'

export class MovieCard extends Component {
    render() {
        return (
            <div className="movie-card p-1">
                                    <div className="movie-poster" style={{backgroundImage:`url(https://mypostercollection.com/wp-content/uploads/2018/08/Game-Of-Thrones-Poster-MyPosterCollection.com-2-683x1024.jpg)`}}></div>
                                    <div className="movie-title my-2">Game of Throne</div>
                                    <div className="movie-run">2015-2019</div>
                                    <div className="mt-1 rating d-flex justify-content-end align-items-end">
                                        <div className="label mr-2">Audeince's Rating</div>
                                        <div className="rating-badge radius-default p-2">85</div>
                                    </div>
                                </div>
        )
    }
}

export default MovieCard
