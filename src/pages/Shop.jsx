import { useEffect, useState } from "react";

function Product({ data }) {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1>
      <h3>{data.price}</h3>
    </div>
  );
}

export default function Shop() {
  return <div>Shop bro</div>;
}
