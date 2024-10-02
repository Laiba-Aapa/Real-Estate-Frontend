import "./list.scss";
// import { listData } from "../../lib/DummyList";
import Card from "../ListComp/Card/Card";

const List = ({ posts }) => {
  return (
    <div className="list">
      {posts.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
