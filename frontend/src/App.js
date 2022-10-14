import "./App.scss";
import data from "./data";
import Iframe from "react-iframe";

function App() {
  return (
    <div className="App">
      {data.products.map((item, index) => (
        <div>
          <p>{item.index}</p>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.imageCaption} />
          <Iframe
            url={item.mapUrl}
            width="640px"
            height="320px"
            id="map"
            className="map"
            display="block"
            position="relative"
            allowFullScreen="true"
          />
        </div>
      ))}
    </div>
  );
}

export default App;
