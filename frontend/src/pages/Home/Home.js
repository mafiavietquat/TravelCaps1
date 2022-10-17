import React from "react";
import { Link } from "react-router-dom";

//
import "./Home.scss";
import data from "../../data.js";

const Home = () => {
  return (
    <div>
      <h1>DEMO HIEN THI CAC DIA DIEM</h1>
      <div className="places">
        {data.places.map((place) => (
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
        ))}
      </div>
    </div>
  );
};

export default Home;
