import { API_URL } from "./config";
const getMealbyID = async (idMeal) => {
  const respons = await fetch(API_URL + "lookup.php?i=" + idMeal);
  return await respons.json();
};

const getAllcatigories = async () => {
  const respons = await fetch(API_URL + "categories.php");
  return await respons.json();
};

const getfiltercatigories = async (categorieName) => {
  const respons = await fetch(API_URL + "filter.php?c=" + categorieName);
  return respons.json();
};
export { getMealbyID, getAllcatigories, getfiltercatigories };
