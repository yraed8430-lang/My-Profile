import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./Pages/Home";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}
