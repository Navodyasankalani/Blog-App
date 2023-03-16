import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import MainNavbar from './Components/MainNavbar';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Header from './Components/Header';
import Home2 from './pages/Home2';
import Footer from './Components/Footer';
import Single from './pages/Single';
import Write from './pages/Write';
import "./style.scss"
import MyList from './pages/MyList';
import Profile from './pages/Profile';

const Layout = () => {
  return (
    <>
      <MainNavbar />
      {/* <SearchInput /> */}
      
      <Outlet />
      <Footer />
    </>
  );
};

const LayoutHome = () => {
  return (
    <>
      <MainNavbar />
      <Header />
      <Outlet />
      <Home2 />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHome />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home2 />,
      },
      
      // {
      //   path: "/categories",
      //   element: <Home2 />,
      // },
      // {
      //   path: "/post/:id",
      //   element: <Single />
      // },
      // {
      //   path: "/write",
      //   element: <Write />
      // },
    ]
  },
  {
    path: "/",
  element: <Layout />,
  children:[
    {
        path: "/write",
        element: <Write />
      },
      {
        path: "/mylist",
        element: <MyList />
      },
      {
        path: "/user/:id",
        element: <Profile />
      },
      // {
      //   path: "/post/:id",
      //   element: <Single />
      // },
  ]
},  
// {
//   path: "/",
// element: <Layout />,
// children:[
//   {
//       path: "/post/:id",
//       element: <Single />
//     },
// ]
// },  
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/allBlogs",
        element: <Home2 />,
      },
      {
        path: "/allBlogs",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />
      },
      
      // {
      //   path: "/allBlogs/search",
      //   element: <SearchInput />,
      // },
      // {
      //   path: "/categories/write",
      //   element: <Write />
      // },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className='container'>
      <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
