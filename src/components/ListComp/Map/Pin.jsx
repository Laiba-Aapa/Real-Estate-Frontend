import { Marker, Popup } from "react-leaflet";
import "./map.scss";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  console.log(item);
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popup__conteiner">
          <div className="popup__img__container">
            <Link to={`/${item.id}`}>
              <img src={item.images[0]} alt={item.title} />
            </Link>
          </div>
          <div className="popup__text__container">
            <h3>
              <Link to={`/${item.id}`}>{item.title}</Link>
            </h3>
            <div className="features">
              <div className="feature">
                <span className="bed">{item.bedroom} bedrooms</span>
              </div>
              <div className="feature">
                <span className="bath">{item.bathroom} bathrooms</span>
              </div>
            </div>
            <b className="price">$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
