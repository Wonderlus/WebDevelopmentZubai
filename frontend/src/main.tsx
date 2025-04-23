import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import MainPage from "./components/MainPage/MainPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StuffPage from "./components/StuffPage/StuffPage.tsx";
import Login from "./components/Auth/Login.tsx";
import Register from "./components/Auth/Register.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/stuff",
                element: <StuffPage />,
            },

            {
                path: "/login",
                element: <Login />,
            },

            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);
