import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuthe } from "../context/AuthContext.js";
import { ProtectedRoute } from "./RouteProtected.js";

import PiePublico from '../pages/publicas/PiePaginaPublico.js';
import EncabezadoPublico from '../pages/publicas/EncabezadoPublico.js';
import Ingresar from '../pages/publicas/LoginPage.js';
import Crear from '../pages/publicas/RegisterPage.js';

import Barra from '../pages/privadas/BarraHerramienta.js';
import BarraIzq from '../pages/privadas/BarraIzquierda.js';

const Routes = () => {
  const { token } = useAuthe();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "",
          element: <div>User Home Page</div>,
        },
        {
          path: "/profile",
          element: <div>User Profile</div>,
        }
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: [<EncabezadoPublico/>,<Ingresar/>,<PiePublico/>],
    },
    {
      path: "/register",
      element: [<EncabezadoPublico/>,<Crear/>,<PiePublico/>],
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;