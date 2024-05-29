import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold">Ready to Order?</h1>
      <div className="w-6/12 m-auto">
        <button
          onClick={handleClearCart}
          className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer"
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Your Cart is empty🙁...Add items to checkout!!!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
