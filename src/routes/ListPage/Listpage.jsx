import "./listPage.scss";
import Filter from "../../components/ListComp/Filter/Filter";
import Card from "../../components/ListComp/Card/Card";
import Map from "../../components/ListComp/Map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

const Listpage = () => {
  // const data = listData;
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div className="list__page">
      <div className="list__container">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={posts.postResponse}
              errorElement={<p>Error Loading Posts</p>}
            >
              {(postResponse) => {
                if (!postResponse?.data || postResponse.data.length === 0) {
                  return <p className="no-post-message">No Related Posts!</p>;
                }
                return (
                  <>
                    {postResponse.data.map((item) => (
                      <Card key={item.id} item={item} />
                    ))}
                  </>
                );
              }}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="map__container">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={posts.postResponse}
            errorElement={<p>Error Loading Posts</p>}
          >
            {(postResponse) => <Map items={postResponse.data} val={"true"} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default Listpage;
