import "./detailPage.scss";
import Slider from "../../components/DetailComp/Slider/Slider";
import { singlePostData } from "../../components/lib/DummyList";
import { userData } from "../../components/lib/DummyList";
import Map from "../../components/ListComp/Map/Map";

const DetailPage = () => {
  return (
    <div className="detail__page">
      <div className="detail__section">
        <div className="wrapper">
          <Slider images={singlePostData.images} />

          <div className="detail__info">
            <div className="info__top">
              <div className="post__info">
                <h1 className="title">{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="pin" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user__info">
                <img src={userData.img} alt={`${userData.name}'s img`} />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="info__bottom">
              <p>{singlePostData.description}</p>
            </div>
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
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="pets image" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="Fee" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent on total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="sizes__features">
            <div className="feature">
              <img src="/size.png" alt="size" />
              <span>80 sqft</span>
            </div>
            <div className="feature">
              <img src="/bed.png" alt="size" />
              <span>2 beds</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="size" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="places__features">
            <div className="feature">
              <img src="/school.png" alt="Fee" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="Fee" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="Fee" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="map__container">
            <Map items={singlePostData} val={false} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
