function HeadingComponent(props) {
  console.log(props, "props");
  //props={products=["watch","earphones","headphones","speakers"]}
  //let name= props.name;

  //destucturing in js
  let { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li>{product}</li>
      ))}
    </ul>
  );
}

export default HeadingComponent;
