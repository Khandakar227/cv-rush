import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import CVgenerator from "./pages/cv-generator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/cvgenerator",
    element: <CVgenerator/>,
  },
]);

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
