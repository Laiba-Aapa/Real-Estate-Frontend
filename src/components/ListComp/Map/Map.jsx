import "./map.scss";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "./Pin";

const Map = ({ items, val }) => {
  const position = [51.505, -0.09];
  const showPin = () => {
    if (val === "true") {
      return items.map((item) => <Pin item={item} key={item.id} />);
    } else {
      return <Pin item={items} />;
    }
  };

  return (
    <MapContainer
      center={
        items.length === 1 ? [items[0].latitude, items[0].longitude] : position
      }
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {showPin()}
    </MapContainer>
  );
};

export default Map;
