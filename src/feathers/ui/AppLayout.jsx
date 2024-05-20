import { Outlet, useMatch } from "react-router-dom";
import Header from "../header/Header";
import Footer from "./Footer";

function AppLayout() {
  const isRecipesPage = useMatch("/recipes");

  return (
    <div className="app flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      {!isRecipesPage && <Footer />}
    </div>
  );
}

export default AppLayout;
