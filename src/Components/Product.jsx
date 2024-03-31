// props {itemName = ""}
export default function Product(props) {
  console.log(props);
  return (
    <div className="product">
      <img
        src="https://m.media-amazon.com/images/I/51IWzogIdcL._AC_UL320_.jpg"
        alt="some thermos"
      />
      <h4>{props.a}</h4>
      <h4>{props.b}</h4>
      <p>{props.c}+ people have purchsed this product</p>
      <h2>${props.d}</h2>
      <p>{props.e}</p>
    </div>
  );
}
