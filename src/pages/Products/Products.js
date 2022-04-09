import { Filters, ProductList } from "Components";
import "./Products.css";

export const Products = () => {
  return (
    <main className="flex">
      <Filters />
      <ProductList />
    </main>
  );
};
