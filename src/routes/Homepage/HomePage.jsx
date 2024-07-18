import Search from "../../components/SearchBar/Search";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="banner">
      <div className="banner__text">
        <div className="banner__text__wrapper">
          <h1 className="title">Find Real Estate and & Get your dream place</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            exercitationem mollitia vel eveniet modi ea aspernatur quas itaque
            porro dolore eos dolor, a voluptatem consectetur?
          </p>
          <Search />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="banner__img__container">
        <img src="/bg.png" alt="background" />
      </div>
    </div>
  );
};

export default HomePage;
