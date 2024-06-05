import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body  from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
// import Grocery from "./components/Grocery";


// JSX is not as HTML, but JSX is like HTML Syntax
// JSX (transpiled before it reaches to JS) - Parcel - Babel

// JSX => React.createElement => JS Object => HTMLElement(render)
// const heading = (<h1 tabIndex="-1" className="heading" >JSX Heading</h1>)


// const TitleComponent = () => <h1>Title</h1>;

// // Component Composition
// const HeadingComponent = () => (<div className="container">
//         {TitleComponent()}
//         <TitleComponent />
//         <TitleComponent></TitleComponent>
//         <h1>Heading Component from React Functional Component</h1>
//     </div>
// );



/** 
 * Chunking
 * Dymanic Bundling
 * Code Splitting
 * Lazy Loading
 * On Demand Loading
 */


const Grocery = lazy(() => 
  import("./components/Grocery")
)

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurent/:resId',
        element: <RestaurentMenu />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)