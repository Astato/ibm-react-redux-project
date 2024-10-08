import plantsArray from "../products";
import { useState, useRef } from "react";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addItem } from "../CartSlice";
import { navigate } from "../PageSlice";

type ItemType = {
  name: string;
  quantity?: number;
  image: string;
  cost: string;
};

const Shop = () => {
  const items = useSelector((state: RootState) => state.cart);
  const page = useSelector((state: RootState) => state.page.page);

  const dispatch = useDispatch();
  const [category, setCategory] = useState<string>("");
  // const [quantity, setQuantity] = useState<number>(1);
  const ref = useRef<SVGSVGElement | null>(null);

  const handleAddItem = (item: ItemType) => {
    const newItem = {
      ...item,
      quantity: 1,
      cost: item.cost.replace("$", "").trim(),
    };
    dispatch(addItem(newItem));
    ref.current?.animate(
      [
        { transform: "rotateZ(9deg)" },
        { transform: "rotateZ(0deg)" },
        { fill: "greenyellow" },
        { transform: "rotateZ(-12deg)" },
        { transform: "rotateZ(0deg)" },
        { fill: "white" },
      ],

      {
        duration: 160,
        iterations: 2,
      }
    );
  };

  // const handleIncreaseQuantity = (item: { name: string; quantity: number }) => {
  //   dispatch(updateQuantity(item));
  // };

  return (
    <div id="shop">
      <nav id="navbar">
        <div
          onClick={() => dispatch(navigate("home"))}
          style={{
            display: "grid",
            gridTemplateColumns: "50px auto",
            alignItems: "center",
            paddingRight: "5px",
            position: "relative",
          }}
        >
          <svg
            style={{ gridColumn: "1", gridRow: "span 2", margin: "auto" }}
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#e8eaed"
          >
            <path d="M480-200q0-100-70-170t-170-70q0 100 70 170t170 70Zm0-202q26 0 44-18t18-44v-6q8 6 16.5 9t19.5 3q26 0 44-18t18-44q0-20-9.5-35T604-576q17-6 26.5-21t9.5-35q0-26-18-44t-44-18q-11 0-19.5 3t-16.5 9v-6q0-26-18-44t-44-18q-26 0-44 18t-18 44v6q-8-6-16.5-9t-19.5-3q-26 0-44 18t-18 44q0 20 9.5 35t26.5 21q-17 6-26.5 21t-9.5 35q0 26 18 44t44 18q11 0 19.5-3t16.5-9v6q0 26 18 44t44 18Zm0-112q-26 0-44-17.5T418-576q0-26 18-44t44-18q26 0 44 18t18 44q0 27-18 44.5T480-514Zm0 314q100 0 170-70t70-170q-100 0-170 70t-70 170ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Zm0-80h640v-640H160v640Zm0 0v-640 640Z" />
          </svg>
          <h2 style={{ gridColumn: "2", margin: 0 }}>GreenHouse</h2>
          <p style={{ gridColumn: "2", margin: 0 }}>
            Where Green Meets Serenity
          </p>
        </div>
        <p
          style={{
            fontSize: "24px",
            margin: "1rem 0",
            textAlign: "center",
            fontWeight: "bolder",
          }}
        >
          {category ? category : "All"}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="cart-btn"
          ref={ref}
          onClick={() => dispatch(navigate("cart"))}
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#e8eaed"
        >
          <path d="M285.33-120Q250-120 225-145.17q-25-25.16-25-61.16V-584l-78.33-189.33H40V-840h126.33L233-680h615.67q19 0 29 16t1 32.67L757.33-393q51 6.67 85.17 45t34.17 90.67q0 56.66-39.5 96.66t-96.17 40q-57.67 0-97.17-40t-39.5-96.66q0-20 5.34-38.34Q615-314 625.33-330l-145.66-12.67L357-159.33q-11.67 18-30.83 28.66Q307-120 285.33-120ZM682-391l113-222.33H260l58 138.66q10 24 29.83 39.17 19.84 15.17 46.84 17.83L682-391ZM286.33-187.67q2 0 15-8.33l103-153.33q-43.66-4.34-78-21.17-34.33-16.83-51-50.17l-8.66-18.66v234q0 7.66 6.33 12.66t13.33 5ZM740-190q30 0 50-20.5t20-49.5q0-30-20-50t-50-20q-29 0-49.5 20T670-260q0 29 20.5 49.5T740-190Zm-58-201-287.33-26.67L682-391Z" />
        </svg>
        <p
          style={{
            fontWeight: "bolder",
            fontSize: "18px",
            position: "fixed",
            right: "2rem",
          }}
        >
          {Object.keys(items).length || ""}
        </p>
      </nav>
      {page === "cart" ? (
        <Cart />
      ) : (
        <div id="items-container">
          <div id="items-categories">
            <h3 style={{ marginBottom: "10px" }}>Categories</h3>
            <div>
              {plantsArray.map((plant, index) => {
                return (
                  <p
                    className="category"
                    key={index}
                    onClick={() => setCategory(plant.category)}
                  >
                    {plant.category}
                  </p>
                );
              })}
            </div>
            <button
              style={{ margin: "auto" }}
              hidden={!Boolean(category)}
              onClick={() => setCategory("")}
            >
              Clear
            </button>
          </div>
          <div
            style={{
              gridColumn: 2,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              rowGap: "2rem",
              marginTop: "3rem",
              paddingBottom: "4rem",
            }}
          >
            {plantsArray.map((plant) => {
              const plants = plant.plants.map((item) => {
                if (category && plant.category !== category) {
                  return null;
                }
                return (
                  <div key={item.name} className="plant-item">
                    <p style={{ fontWeight: "bolder", fontSize: "24px" }}>
                      {item.name}
                    </p>
                    <img src={item.image}></img>
                    <p style={{ fontSize: "18px" }}>{item.description}</p>
                    <p style={{ fontSize: "21px", fontWeight: "bold" }}>
                      Price: {item.cost}
                    </p>
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingBottom: "1rem",
                        width: "100%",
                      }}
                    >
                      <button
                        disabled={Boolean(items[item.name])}
                        onClick={() => handleAddItem(item)}
                      >
                        {/* {!items[item.name] ? "Add to cart" : "Add more"} */}
                        Add to cart
                      </button>
                      {/* {items[item.name] && (
                        <select
                          style={{
                            right: "25%",
                            fontSize: "18px",
                            position: "absolute",
                          }}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      )} */}
                    </div>
                  </div>
                );
              });
              return plants;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
