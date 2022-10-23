import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logger from "use-reducer-logger";
//
import "./Home.scss";
import Banner from "../../components/Banner/Banner";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, places: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Home = () => {
  const [{ loading, error, places }, dispatch] = useReducer(logger(reducer), {
    places: [],
    loading: true,
    error: "",
  });
  // const [places, setPlaces] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/places");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
      const result = await axios.get("/api/places");
      // setPlaces(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="home">
      <Banner />

      <h1>DEMO HIEN THI CAC DIA DIEM</h1>
      <div className="places">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          places.map((place) => (
            <div className="place" key={place.slug}>
              <Link to={`/place/${place.slug}`}>
                <img src={place.image} alt={place.name} />
              </Link>
              <div className="place-info">
                <Link to={`/place/${place.slug}`}>
                  <p>{place.name}</p>
                </Link>
                <button style={{ marginBottom: 100 }}>Add to cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
