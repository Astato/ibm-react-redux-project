import Home from "./components/Home";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Shop from "./components/Shop";

function App() {
  const page = useSelector((state: RootState) => state.page.page);

  return (
    <div className="App">
      <div
        id="background"
        style={{
          backgroundImage: `url(https://cdn.pixabay.com/photo/2019/06/09/14/53/greenhouse-4262243_960_720.jpg)`,
        }}
      ></div>
      {page === "shop" || page === "cart" ? <Shop /> : <Home />}
    </div>
  );
}

export default App;
