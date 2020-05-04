import React from 'react';
import EllipsisText from "react-ellipsis-text";

const MovieCard = ({itemData}) => {
    return (
        <div className="movie-card h-100 px-1 pt-1 pb-2">
        <div className="movie-poster" style={{backgroundImage:`url(${itemData.image})`}}></div>
    <div className="movie-title-wrap my-2">
        <h1 className="movie-title">
        <EllipsisText text={itemData.title} length={23} tooltip={itemData.title} />
        </h1>
        
    </div>
        <h4 className="movie-run">{itemData.runStart} {itemData.runEnd !==null ? " -"+itemData.runEnd: ""}</h4>
        <div className="mt-1 rating d-flex justify-content-end align-items-end">
            <div className="label mr-2">Audeince's Rating</div>
    <div className="rating-badge default-radius p-2">{itemData.rating}</div>
        </div>
    </div>
    )
}

export default MovieCard

