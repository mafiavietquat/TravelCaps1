import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logger from "use-reducer-logger";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//
import "./Home.scss";
import Content from "../../components/Content/Content";
import Banner from "../../components/Banner/Banner";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_REQUEST":
//       return { ...state, loading: true };
//     case "FETCH_SUCCESS":
//       return { ...state, places: action.payload, loading: false };
//     case "FETCH_FAIL":
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

const Home = () => {
  // const [{ loading, error, places }, dispatch] = useReducer(logger(reducer), {
  //   places: [],
  //   loading: true,
  //   error: "",
  // });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch({ type: "FETCH_REQUEST" });
  //     try {
  //       const result = await axios.get("/api/places");
  //       dispatch({ type: "FETCH_SUCCESS", payload: result.data });
  //     } catch (err) {
  //       dispatch({ type: "FETCH_FAIL", payload: err.message });
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="home">
      <Banner />
      <Content />
    </div>
  );
};

export default Home;
