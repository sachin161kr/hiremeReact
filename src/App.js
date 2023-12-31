import "./App.css";

import Auth from "./pages/Auth";
import Posts from "./pages/Posts";
import PostJob from "./pages/PostJob";
import JobDescription from "./pages/JobDescription";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
    {
      path: "/jd",
      element: <JobDescription />,
    },
    {
      path: "addPost",
      element: <PostJob />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
