import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body  from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";


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
        path: '/contact',
        element: <Contact />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)