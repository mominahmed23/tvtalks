import React, { useState, useContext } from "react";
import MovieCard from "./MovieCard";
import { Row, Col, Spinner } from "react-bootstrap";
import { useEffect } from "react";
import Axios from "axios";
import { LoginContext } from "../../App";
import { getTvShows } from "../../utils/homeApiHandler";

function CardsView() {
  const loginContext = useContext(LoginContext);
  const [search, setSearch] = useState("");
  const { tvShows } = loginContext.loginStatus;

  // async function getTvShows(userData){

  //     try{
  //         const res=await Axios.post("http://localhost:5000/home", userData);
  //         loginContext.setLoginStatus({type:"GET_TV_SHOWS", payload: res.data.tvshows});
  //     }catch(err){
  //         console.log(err);
  //     }

  // }

  useEffect(() => {
    const userData = {};
    if (loginContext.loginStatus.isLoggedIn) {
      userData.token = localStorage.getItem("token");
    }

    getTvShows(userData)
      .then((res) => {
        loginContext.setLoginStatus({ type: "GET_TV_SHOWS", payload: res });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loginContext.loginStatus.isLoggedIn]);

  const filteredData = tvShows.filter((element) =>
    element.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="default-shadow pt-4" style={{ minHeight: "400px" }}>
      {tvShows.length === 0 ? (
        <div className="text-center">
          <Spinner animation="border" variant="secondary" />
        </div>
      ) : (
        <React.Fragment>
          <div className="searchbar-wrap mb-4 text-center">
            <input
              type="search"
              className="filter-search w-50"
              placeholder="Filter..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="cards-wrap default-scrollbar px-3 py-2">
            {filteredData.length === 0 ? (
              <h2 className="text-center text-muted">No shows found</h2>
            ) : (
              <Row>
                {filteredData.map((item) => {
                  return (
                    <Col md={6} lg={4} xl={3} className="mb-3" key={item._id}>
                      <MovieCard itemData={item} />
                    </Col>
                  );
                })}
              </Row>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default CardsView;
