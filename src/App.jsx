import { useState } from "react";
import "./App.css";
import Product from "./Components/Product";
import productList from "../src/assets/data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="parent-container">
      {productList.map((prod, i) => (
        <Product
          a={prod.category}
          b={prod.itemName}
          c={prod.numberOfPurchases}
          d={prod.price}
          e={prod.deliveryEstimate}
          key={prod.itemName + " " + i}
        />
      ))}
    </div>
  );
}

export default App;
