import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="home__background">
        <div className="home__background__overlay"> </div>
        <img
          src="https://shopcoinusa.com/wp-content/uploads/2021/12/z3059361473346_23e24c2fb4b09ab90e584573746c7296.jpg"
          style={{
            width: "100%",
            height: "100%",
          }}
          alt="background"
        />
      </div>
      <div className="home__content">
        <div className="home__content__text">
          <p className="home__content__title "> Download Shop Coin USA App </p>
          <p className="home__content__subtitle">
            {" "}
            Manage crypto assets at your fingertips{" "}
          </p>
          <div className="home__content__buttons">
            <img
              className="home__content__buttons__image"
              src="https://shopcoinusa.com/wp-content/uploads/2021/12/nut.png"
              alt="nut"
            />
          </div>
          <p className="home__content__footer"> For Androi </p>
        </div>
      </div>
    </div>
  );
}

// import React from "react";

// export default function Home() {
//   return <div>Home</div>;
// }
