// const appFoodID = "f15a2acf";
// const appFoodKey = "4b51d0a399631fdc0fd4145ba9179c42";

const appRecipeID = "99a7fcd5";
const appRecipesKey = "598182ba5381c5906d27e353d2fb4028";

export async function searchRecipes(queries, id = "") {
  const res = await fetch(
    `https://api.edamam.com/api/recipes/v2${id && `/${id}`}?type=public&app_id=${appRecipeID}&app_key=${appRecipesKey}&${queries}`,
  );
  const data = await res.json();
  return data;
}

// field=image&field=dietLabels&field=ingredientLines&field=calories&field=totalTime
