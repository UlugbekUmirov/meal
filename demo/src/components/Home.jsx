import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import CatigorieList from "./CatigorieList";
import { getAllcatigories } from "../api";
import NotFound from "./NotFound";
import Loader from "./Loader";
import Search from "./Search";

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setfilteredCatalog] = useState([]);

  const { push } = useHistory();
  const { pathname, search } = useLocation();
  console.log({ push });

  const handleSearch = (str) => {
    setfilteredCatalog(
      catalog.filter(
        ((item) => item.strCategory.toLowerCase().includes(str.toLowerCase()),
        push({
          pathname,
          search: `?search=${str}`,
        }))
      )
    );
  };

  useEffect(() => {
    getAllcatigories().then((data) => {
      setCatalog(data.categories);
      setfilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <div>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Loader />
      ) : (
        <CatigorieList catalog={filteredCatalog} />
      )}
    </div>
  );
}
