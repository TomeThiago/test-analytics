import { createBrowserRouter } from "react-router-dom"

import { Page1 } from "../pages/Page1"
import { Page2 } from "../pages/Page2";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "/page3",
    element: <Page1 />,
  },
  {
    path: "/page4",
    element: <Page1 />,
  },
]);