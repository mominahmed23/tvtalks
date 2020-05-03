import React, { Component } from 'react'

export class MovieCard extends Component {
    render() {
        let url = this.props.item
        return (
            <div className="movie-card h-100 px-1 pt-1 pb-2">
                                    <div className="movie-poster" style={{backgroundImage:`url(${this.props.itemData.image})`}}></div>
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
