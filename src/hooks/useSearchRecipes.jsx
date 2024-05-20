import { useEffect, useMemo, useState } from "react";
import { searchRecipes } from "../services/apiRecipes";

function useSearchRecipes(queries, id = "") {
  const [meals, setMeals] = useState(() => (id ? {} : []));
  const [nextPage, setNextPage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const recipes = useMemo(() => {
    return meals;
  }, [meals]);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setError("");
        const data = await searchRecipes(queries, id);
        setMeals(() => (!id ? data.hits : data));
        setNextPage(data._links.next.href);
      } catch (error) {
        setError("Failed Fetch Data");
      } finally {
        setIsLoading(false);
      }
    }
    getData();

    return () => {
      setMeals(() => (id ? {} : []));
      setIsLoading(false);
      setError("");
    };
  }, [queries, id]);

  return { recipes, isLoading, error, nextPage };
}

export default useSearchRecipes;
