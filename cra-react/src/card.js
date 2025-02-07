import React from "react";

export default function Card(props) {
  console.log(props, "props"); //props={product:{img:"",name:"",price:""}}
  let { img, name, price } = props.product;
  return (
    <div>
      <img src={img} alt="image-preview" />
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
}
