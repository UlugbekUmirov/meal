import CategorieItem from "./CategorieItem";

export default function CatigorieList({ catalog = [] }) {
  return (
    <div className="list">
      {catalog.map((el) => (
        <CategorieItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
}
