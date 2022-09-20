import { Link } from "react-router-dom";

export default function CategorieItem(props) {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;
  return (
    <div className="card">
      <div className="col s12 m7">
        <div className="card-image">
          <img src={strCategoryThumb} alt={strCategory} />
        </div>
        <div className="card-content">
          <span className="card-title">
            {" "}
            <b>{strCategory}</b>
          </span>
          <p>{strCategoryDescription.slice(0, 60)}...</p>
        </div>
      </div>
      <div className="card-action">
        <Link to={`category/${strCategory}`} className="btn  purple darken-3">
          Watch category
        </Link>
      </div>
    </div>
  );
}
