import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Singup from "./routes/Singup";
import Notes, { loader as notesLoader } from "./routes/Notes";
import AddNote from "./routes/AddNote";
import Error from "./routes/Error";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Login from "./routes/Login";
import UserContextProvider from "./components/userContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ChangeNote, { loader as changeNoteLoader } from "./routes/ChangeNote";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/notes/:email",
        element: <Notes />,
        loader: notesLoader,
      },
      {
        path: "/notes/add",
        element: <AddNote />,
      },
      {
        path: "/notes/:email/:noteId",
        element: <ChangeNote />,
        loader: changeNoteLoader,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/singup",
    element: <Singup />,
  },
]);

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
