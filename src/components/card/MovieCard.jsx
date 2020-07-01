import React, { useContext } from "react";
import EllipsisText from "react-ellipsis-text";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { LoginContext } from "../../App";
import Axios from "axios";
import { getTvShows } from "../../utils/homeApiHandler";

function MovieCard({ itemData }) {
  const loginContext = useContext(LoginContext);

  const [rateStatus, setRateStatus] = useState(false);
  const [rangeValue, setRangeValue] = useState(50);

  const submitRating = async () => {
    try {
      const userData = {
        token: localStorage.getItem("token"),
        tvShowName: itemData.title,
        rating: rangeValue,
      };

      await Axios.post("http://localhost:5000/add", userData);
      getTvShows({ token: localStorage.getItem("token") }).then((res) => {
        loginContext.setLoginStatus({ type: "GET_TV_SHOWS", payload: res });
      });
    } catch (err) {
      console.log(err);
    }
    setRateStatus(false);
  };

  return (
    <div className="movie-card h-100 px-1 pt-1 pb-1">
      <div
        className="movie-poster"
        style={{ backgroundImage: `url(${itemData.image})` }}
      ></div>
      <div className="movie-title-wrap my-2">
        <h1 className="movie-title">
          <EllipsisText
            text={itemData.title}
            length={23}
            tooltip={itemData.title}
          />
        </h1>
      </div>
      <h4 className="movie-run">{itemData.year}</h4>
      <div className="rating mt-1 d-flex justify-content-between">
        <div>
          <span className="rating-badge default-radius p-2">
            {itemData.rating ? itemData.rating : "N/A"}
          </span>
          <p className="font-size-sm mb-0 mt-2 text-primary">Average Rating</p>
        </div>
        {loginContext.loginStatus.isLoggedIn ? (
          <div className="text-right">
            <span className="rating-badge-user default-radius p-2">
              {itemData.userRating ? itemData.userRating : "N/A"}
            </span>

            <p className="font-size-sm mb-0 mt-2 text-primary">Your Rating</p>
            <button
              onClick={() => {
                setRateStatus((prevStatus) => !prevStatus);
              }}
              className="btn btn-rate font-size-sm px-2 py-0"
            >
              Rate
            </button>
          </div>
        ) : null}
      </div>
      {rateStatus ? (
        <div className="rate text-right">
          <div className="range d-flex justify-content-between">
            <span className="range-value">{rangeValue}</span>
            <input
              min="1"
              type="range"
              onChange={(e) => {
                setRangeValue(e.target.value);
              }}
            />
          </div>

          <div className="actions pb-1">
            <button
              className="btn font-size-sm btn-sm btn-outline-danger mx-3 px-3 py-0"
              onClick={() => {
                setRateStatus(false);
              }}
            >
              cancel
            </button>
            <button
              onClick={submitRating}
              className="btn font-size-sm btn-sm btn-outline-success px-3 py-0"
            >
              done
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MovieCard;
