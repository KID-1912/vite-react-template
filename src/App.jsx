import { useState } from "react";

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
  return (
    <tr>
      <td>
        {product.stocked ? product.name : <span style={{ color: "red" }}>{product.name}</span>}
      </td>
      <td>{product.price}</td>
    </tr>
  );
}

// 表格
function ProductTable({ products }) {
  // 产品类别表
  const productCategories = [...new Set(products.map((product) => product.category))];
  const rows = [];

  productCategories.forEach((category) => {
    rows.push(<ProductCategoryRow categoryName={category} key={category}></ProductCategoryRow>);
    products
      .filter((product) => product.category === category)
      .forEach((product) =>
        rows.push(<ProductRow product={product} key={product.name}></ProductRow>),
      );
  });

  return (
    <table style={{ width: "300px" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

// 搜索过滤栏
function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form>
      <div>
        <input
          type="text"
          value={filterText}
          placeholder="Search..."
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            id="stockCheckbox"
            value={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />
          Only show products in stock
        </label>
      </div>
    </form>
  );
}

// 可过滤的产品表格
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filterProducts = products.filter((product) => {
    if (product.name.indexOf(filterText) === -1) return false;
    if (inStockOnly && product.stocked === inStockOnly) return false;
    return true;
  });
  return (
    <>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      ></SearchBar>
      <ProductTable products={filterProducts}></ProductTable>
    </>
  );
}

// 产品数据
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
