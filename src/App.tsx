import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import CVgenerator from "./pages/cv-generator";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cvgenerator",
    element: <CVgenerator />,
  },
]);

function App() {
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const Android = userAgent.indexOf("android") > -1;
    
    if (Android || window.innerWidth <= 600) {
      toast.warn('Note: This app was designed for desktop users. It is not mobile responsive.');
    }
  }, [])
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        limit={3}
        draggable
        theme="colored"
      />
    </>
  )
}

export default App
