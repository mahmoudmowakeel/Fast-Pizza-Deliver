import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaceItemQuantity, increaceItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaceItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium ">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaceItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
