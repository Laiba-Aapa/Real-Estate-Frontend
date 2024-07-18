import "./list.scss";
import { listData } from "../lib/DummyList";
import Card from "../ListComp/Card/Card";

const List = () => {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
