import React from 'react';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchResults from './components/SearchResults';

// const appRouter = createBrowserRouter([{
//   path: "/",
//   element: <Body />,
//   children: [
//     {
//       path: "/",
//       element: <MainContainer />
//     },
//     {
//       path: "watch",
//       element: <WatchPage />
//     }
//   ]
// }])

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Head />,
  children: [
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />
        },
        {
          path: "watch",
          element: <WatchPage />
        },
        {
          path: "search/:Query",
          element: <SearchResults />
        }
      ]
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      {/* <BrowserRouter> */}
      <div>
        {/* <Head /> */}
        <RouterProvider router={appRouter} />
      </div>
      {/* </BrowserRouter> */}
    </Provider>
  );
}

export default App;
