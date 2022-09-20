import FilterItem from "./FilterItem";

export default function FilterList({ filter = [] }) {
  return (
    <div className="list">
      {filter.map((el) => (
        <FilterItem key={el.idMeal} {...el} />
      ))}
    </div>
  );
}
