import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import ErrorPage from "./pages/404";
import Lottokeeper from "./pages/Lottokeeper";
import Lottooperator from "./pages/Lottooperator";
import Layout from "./layout/Layout";
import RootLayout from "./pages/Root";
import { CookieProvider } from "./context/Context";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Main /> },
      { path: "/Lottokeeper", element: <Lottokeeper /> },
      { path: "/Lottooperator", element: <Lottooperator /> },
      { path: "/about", element: <About /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return (
    <CookieProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </CookieProvider>
  );
}

export default App;
