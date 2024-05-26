import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";
import Spinner from "./feathers/ui/Spinner";

const Home = lazy(() => import("./feathers/home/Home"));
const Recipes = lazy(() => import("./feathers/recipes/Recipes"));
const AppLayout = lazy(() => import("./feathers/ui/AppLayout"));
const Saved = lazy(() => import("./feathers/Saved/Saved"));
const DetailRecipe = lazy(() => import("./feathers/details/DetailRecipe"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    path: "/",
    children: [
      { element: <Home />, index: true },
      { element: <Recipes />, path: "recipes" },
      { element: <DetailRecipe />, path: "detail/:id" },
      { element: <Saved />, path: "saved" },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-left"
        gutter={2}
        toastOptions={{
          className: "bg-light-badge-btn md:ml-8 ml-4 md:mb-4 mb-16",
          duration: 3000,
          error: { duration: 5000 },
        }}
        reverseOrder={false}
      />
    </Suspense>
  );
}

export default App;
