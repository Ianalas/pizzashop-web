import { createBrowserRouter } from "react-router";
import { Dashboard } from "./pages/app/dashboard/Dashboard";
import { SignIn } from "./pages/auth/Sing-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignUp } from "./pages/auth/Sing-up";
import { Orders } from "./pages/app/orders/Orders";
import { NotFound } from "./pages/404";
import { Error } from "./pages/error";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/orders", element: <Orders/> },
    ],
  },
 
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  }
]);
