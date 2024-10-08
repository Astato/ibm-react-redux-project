import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { navigate } from "../PageSlice";
import { removeItem, updateQuantity } from "../CartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
  const items = useSelector((state: RootState) => state.cart);
  const [total, setTotal] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [update, setUpdate] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotal(0);
    setTotalItems(0);
    Object.keys(items).map((item) => {
      setTotal((prev) => prev + items[item].cost * items[item].quantity);
      setTotalItems((prev) => prev + items[item].quantity);
    });
  }, [update]);

  const handleIncreaseQuantity = (item: string) => {
    dispatch(updateQuantity({ name: item, operation: "increase" }));
    setUpdate(!update);
    return;
  };

  const handleDecreaseQuantity = (item: string) => {
    dispatch(updateQuantity({ name: item, operation: "decrease" }));
    setUpdate(!update);
    return;
  };

  const handleRemoveItem = (item: string) => {
    dispatch(removeItem(item));
    setUpdate(!update);
  };

  return (
    <div id="shopping-cart">
      <button
        onClick={() => dispatch(navigate("shop"))}
        style={{ margin: "auto" }}
      >
        Continue Shopping
      </button>
      <button
        onClick={() => alert("Functionality to be added for future reference")}
        disabled={Object.keys(items).length === 0}
        style={{ margin: "auto", fontSize: "larger" }}
      >
        Checkout {totalItems} items : ${total}
      </button>
      {Object.keys(items).length &&
        Object.keys(items).map((item, index) => {
          return (
            <div key={index} className="plant-item">
              <p style={{ fontWeight: "bolder", fontSize: "24px" }}>
                Plant: {item}
              </p>
              <img src={items[item].image}></img>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "18px", marginRight: "21px" }}>
                  Quantity: {items[item].quantity}
                </p>
                <button
                  style={{ margin: "auto 1rem auto 0" }}
                  onClick={() => handleIncreaseQuantity(item)}
                >
                  +
                </button>
                <button
                  disabled={items[item].quantity === 1}
                  onClick={() => handleDecreaseQuantity(item)}
                >
                  -
                </button>
              </div>
              <p style={{ fontSize: "21px", fontWeight: "bold" }}>
                Total Cost: {items[item].cost * items[item].quantity}
              </p>
              <button
                style={{ backgroundColor: "darkorange", margin: "1rem auto" }}
                onClick={() => {
                  handleRemoveItem(item);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
