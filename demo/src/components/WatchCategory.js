import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { getfiltercatigories } from "../api";
import FilterList from "./FilterList";
import Loader from "./Loader";
export default function WatchCategory() {
  const { name } = useParams();
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getfiltercatigories(name).then((data) => {
      setFilter(data.meals);
    });
  }, [name]);
  return (
    <div> {!filter.length ? <Loader /> : <FilterList filter={filter} />}</div>
  );
}
