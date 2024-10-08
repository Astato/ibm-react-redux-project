import { useDispatch } from "react-redux";
import { navigate } from "../PageSlice";
const Home = () => {
  const dispatch = useDispatch();

  return (
    <div id="home">
      <div id="action-call">
        <h1 style={{ marginBottom: "3px", fontSize: "40px" }}>
          Welcome to GreenHouse
        </h1>
        <p style={{ fontWeight: "bolder", fontSize: "18px" }}>
          Where green meets serenity
        </p>
        <hr
          style={{
            width: "50px",
            backgroundColor: "green",
            height: "3px",
            borderRadius: "100px",
            border: "none",
            marginBottom: "30px",
          }}
        ></hr>
        <button onClick={() => dispatch(navigate("shop"))}>Get Started</button>
      </div>
      <div id="welcome-message">
        <span
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            fontSize: "23px",
          }}
        >
          Welcome to GreenHouse, where green meets serenity!
        </span>
        <br />
        <p>
          At GreenHouse, we are passionate about bringing nature closer to you.
          Our mission is to provide a wide range of high-quality plants that not
          only enhance the beauty of your surroundings but also contribute to a
          healthier and more sustainable lifestyle. From air-purifying plants to
          GreenHouse aromatic fragrant ones, we have something for every plant
          enthusiast.
          <br />
          <br />
          Our team of experts is dedicated to ensuring that each plant meets our
          strict standards of quality and care. Whether you're a seasoned
          gardener or just starting your green journey, we're here to support
          you every step of the way. Feel free to explore our collection, ask
          questions, and let us help you find the perfect plant for your home or
          office.
          <br />
          <br />
          Join us in our mission to create a greener, healthier world. Visit
          GreenHouse today and experience the beauty of nature right at your
          doorstep.
        </p>
      </div>
    </div>
  );
};

export default Home;
