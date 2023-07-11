import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import HPApp from './HPApp.jsx';
import TodoApp from './TodoApp.jsx';
import Error from './Error.jsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CharacterDetail from './CharacterDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HPApp />,
    errorElement: <Error />,
    children: [
      {
        path: "/char/:characterId",
        element: <CharacterDetail />,
      }
    ],
  },
  {
    path: "/todo",
    element: <TodoApp />,
  },
  {
    path: "/todo/:todoId",
    element: <TodoApp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
