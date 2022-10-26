import axios from "axios";
import React, { useEffect, useReducer } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import logger from "use-reducer-logger";
import Heading from "../component/Heading/Heading";
import "./VisitPlaces.scss";

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

const VisitPlaces = (props) => {
  const [{ loading, error, places }, dispatch] = useReducer(logger(reducer), {
    places: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/places");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="visitPlaces">
        <Container>
          <Heading
            head="Choose Your"
            title="Địa điểm tham quan"
            desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the"
          />
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <Row>
              {places.map(
                (place) =>
                  place.category === "Địa điểm tham quan" && (
                    <Col sm={6} md={4} lg={3} className="mb-3" key={place.slug}>
                      <div className="place">
                        <Link to={`/place/${place.slug}`}>
                          <img src={place.image} alt={place.name} />
                        </Link>
                        <div className="place-info">
                          <Link to={`/place/${place.slug}`}>
                            <p>{place.name}</p>
                          </Link>
                          <button style={{ marginBottom: 100 }}>
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </Col>
                  )
              )}
            </Row>
          )}
        </Container>
      </div>
    </div>
  );
};

export default VisitPlaces;
