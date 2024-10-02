import "./detailPage.scss";
import Slider from "../../components/DetailComp/Slider/Slider";
import Map from "../../components/ListComp/Map/Map";
import { useLoaderData, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest.js";
const DetailPage = () => {
  const navigate = useNavigate();
  const post = useLoaderData();
  console.log(post);
  const [saved, setSaved] = useState(post.isSaved);
  const { currentUser } = useContext(AuthContext);

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    // AFTER REACT 19 UPDATE TO USEOPTIMISTIK HOOK
    setSaved((prev) => !prev);
    try {
      const res = await apiRequest.post("/users/save", { postId: post.id });
      console.log(res);
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };
  return (
    <div className="detail__page">
      <div className="detail__section">
        <div className="wrapper">
          <Slider images={post.images} />

          <div className="detail__info">
            <div className="info__top">
              <div className="post__info">
                <h1 className="title">{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="pin" />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user__info">
                <img
                  src={post.user.avatar}
                  alt={`${post.user.username}'s img`}
                />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div
              className="info__bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.PostDetail.desc),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="features__section">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="general__features">
            <div className="feature">
              <img src="/utility.png" alt="utility" />
              <div className="featureText">
                <span>utilities</span>
                {post.PostDetail.utilities === "owner" ? (
                  <p>owner is responsible</p>
                ) : (
                  <p>Tenant is responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="pets image" />
              <div className="featureText">
                <span>Pet Policy</span>
                {post.PostDetail.pets === "allowed" ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="Fee" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>{post.PostDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="sizes__features">
            <div className="feature">
              <img src="/size.png" alt="size" />
              <span>{post.PostDetail.size} sqft</span>
            </div>
            <div className="feature">
              <img src="/bed.png" alt="size" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="size" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="places__features">
            <div className="feature">
              <img src="/school.png" alt="Fee" />
              <div className="featureText">
                <span>School</span>
                <p>
                  {post.PostDetail.school > 999
                    ? post.PostDetail.school / 1000 + "km"
                    : post.PostDetail.school / 1000 + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="Fee" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>
                  {post.PostDetail.bus > 999
                    ? post.PostDetail.bus / 1000 + "km"
                    : post.PostDetail.bus / 1000 + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="Fee" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>
                  {post.PostDetail.restaurant > 999
                    ? post.PostDetail.restaurant / 1000 + "km"
                    : post.PostDetail.restaurant / 1000 + "m"}{" "}
                  away
                </p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="map__container">
            <Map items={post} val={false} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a message
            </button>
            <button
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "#fece51" : "white",
              }}
            >
              <img src="/save.png" alt="" />
              {saved ? "place saved" : "Save the place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
