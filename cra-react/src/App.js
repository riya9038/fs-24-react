import "./App.css";
import Card from "./card";
//import HeadingComponent from "./heading";

let products = [
  { img: "https://picsum.photos/id/26/200/300", name: "watch", price: 1000 },
  {
    img: "https://picsum.photos/id/26/200/300",
    name: "earphones",
    price: 2000,
  },
  {
    img: "https://picsum.photos/id/26/200/300",
    name: "headphones",
    price: 5000,
  },
  {
    img: "https://picsum.photos/id/26/200/300",
    name: "speakers",
    price: 10000,
  },
];
function App() {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}
    >
      {products.map((product) => (
        <Card product={product} />
      ))}
    </div>
  );
}

export default App;
