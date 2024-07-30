import { useState } from 'react';

// 产品目录行
function ProductCategoryRow({ categoryName }) {
  return (
    <tr>
      <th colSpan="2">{categoryName}</th>
    </tr>
  );
}

// 产品行
function ProductRow({ product }) {
  const prizeName = product.stocked ? product.name : <span style="color: red">{product.name}</span>;
  const prizePrice = product.price;
  return (
    <tr>
      <td>{prizeName}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default function App() {
  return (
    <>
      <ProductCategoryRow />
      <ProductRow />
    </>
  );
}
