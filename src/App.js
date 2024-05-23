import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body  from "./components/Body";

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
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)