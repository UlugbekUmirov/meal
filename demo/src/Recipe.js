import { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { getMealbyID } from "./api";
import Loader from "./components/Loader";

export default function Recipe() {
  const { goBack } = useHistory();
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [showrecipe, setShowrecipe] = useState(false);

  const handleShowrecipe = () => {
    setShowrecipe(!showrecipe);
  };

  useEffect(() => {
    getMealbyID(id).then((data) => {
      setRecipe(data.meals[0]);
    });
  }, []);
  return (
    <div>
      <img
        onClick={goBack}
        src="https://img.icons8.com/external-ayo-icons-royyan-wijaya/54/000000/external-arrow-arrow-line-ayo-icons-royyan-wijaya-51.png"
      />
      {!recipe.idMeal ? (
        <Loader />
      ) : (
        <div className="row watch-recipe">
          <div>
            <img
              className="recipe-img"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ marginRight: "5px" }}
                onClick={handleShowrecipe}
                src="https://img.icons8.com/ios/50/000000/plus--v1.png"
              />
              <b>Show Recipe</b>
            </div>
            {showrecipe ? (
              <table className="centred">
                <thead>
                  <tr>
                    <th>Ingradient</th>
                    <th>measure</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(recipe).map((key) => {
                    if (key.includes("strIngredient") && recipe[key]) {
                      return (
                        <tr>
                          <td>{recipe[key]}</td>
                          <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                        </tr>
                      );
                    } //includes => tashkil topgan
                  })}
                </tbody>
              </table>
            ) : null}
          </div>
          <div className="">
            <h3>{recipe.strMeal}</h3>
            <h6>
              <b>Category: </b>
              {recipe.strCategory}
            </h6>
            {recipe.strArea ? (
              <h6>
                <b>Area: </b>
                {recipe.strArea}
              </h6>
            ) : null}
            <p>{recipe.strInstructions}</p>
            {recipe.strYoutube ? (
              <iframe
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              ></iframe>
            ) : null}
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
}
/* <iframe width="560" height="315" src="https://www.youtube.com/embed/35b2t7raHTQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
