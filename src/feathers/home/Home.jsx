import Container from "../ui/Container";
import Banner from "./Banner";
import HealthPreference from "./HealthPreference";
import LatestCountryRecipes from "./LatestCountryRecipes";
import MealType from "./MealType";

function Home() {
  return (
    <div className="home px-3 pt-20">
      <Banner />
      <Container>
        <MealType />
        <LatestCountryRecipes countryRecipe="Asian" />
        <LatestCountryRecipes countryRecipe="French" />
        <HealthPreference />
      </Container>
    </div>
  );
}

export default Home;
