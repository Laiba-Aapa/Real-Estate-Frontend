import "./listPage.scss";
import { listData } from "../../components/lib/DummyList";
import Filter from "../../components/ListComp/Filter/Filter";
import Card from "../../components/ListComp/Card/Card";
import Map from "../../components/ListComp/Map/Map";

const Listpage = () => {
  const data = listData;
  return (
    <div className="list__page">
      <div className="list__container">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="map__container">
        <Map items={data} val={"true"} />
      </div>
    </div>
  );
};

export default Listpage;
