# REACT

# Parcel
    - Dev Build
    - Local Server
    - HMR = Hot Module Replacement
    - File Watching Alogorithm - written in C++
    - Image Optimization
    - Minification
    - Compress
    - Bundle
    - Consistent Hashing
    - Code Splitting
    - Differential Bundling - support older browsers
    - Error Handling
    - Diagnostics
    - HTTPs
    - Tree Shaking - remove unused code
    - Different Dev and Prod bundles


# React Hooks
    (Nomral Javascript Utility Function)
    - useState() - Super Powerfull State Variables in React
    - useEffect()

# React Fiber

# Enable CORS Chrome Extension

# Shimmer UI

# Router
- createBrowserRouter, RouterProvider, Outlet, Link, useRouteError, useParams

# Class Based Implementation
    - extends React.Component
    - Constructor
    - Render
    - ComponentDidMount
    - Render Phase (Constructor, Render, Updating DOM, ComponentDidMount)
    - Updating/Commit Phase (setState(), Render, Updating DOM, ComponentDidUpdate)
    - When two Child Components are in one Class, the componentDidMount for both child classes will run in the last because the DOM is the expensive thing for the browser so, React will batch the two Child ComponentDidMount() and execute them at once.
    - ComponentWillUnmount()

# Functional Component
    - Added Unmounting Phase

# Custom Hook
    - useRestaurentMenu()
    - useOnlineStatus()

# Lazy Loading, Chunking, Dynamic Building, Code Splitting, On Demand Loading (Splitting the bundler)

    - Lazy, Suspense from React Library

# Type Of CSS we can use
    - SaSS, Material UI, Style Component, Ant Design, Boostrap, Tailwind CSS

    - Added Tailwind CSS

# Higher Order Components
Take the component and returns the Component

# Lifting the State Up

# React Context
- Functional Based Component
    - createContext
    - useContext
    - UserContext.Provider
- Class Based Component
    UserContext.Consumer

# Store Management
    - Zustand
    - Redux (Old)
    - Redux Toolkit (Latest)

# Redux Toolkit
    - Install @reduxjs/toolkit and react-redux
    - Build Our Store (configureStore)
    - Connect the Store to APP (Provider)
    - Create Slice 
    - Dispatch (Action) - (useDispatch)
    - Reducer
    - Subscribe (useSelector)

# Types of Testing (Developer)
    - Unit Testing
    - Integration Testing
    - End to End Testing - e2e 
    
# Testing Library
    - React Testing Library - (Uses JEST Behind)
# Installation For Testing    
    - Install React Testing Library
        npm install -D @testing-library/react
    - Install Jest
        npm install -D jest
    - Install Babel Dependencies
        npm install --save-dev babel-jest @babel/core @babel/preset-env
    - Configure Babel
        Created new file babel.config.js and added the configuration
    - Cofigure Parcel Config to disable default babel transpilation
        (In simple words Parcel has its own babel, so we are configuring our own new babel Config)
        Created new file .parcelrc  and added the configuration
    - Jest Configuration
        npx jest --init
    - Install jsdom Library
        npm install --save-dev jest-environment-jsdom
    - Install npm i -D @babel/preset-react to make JSX work in test cases
    - Include @babel/preset-react inside my babel configuration
        ['@babel/preset-react', {runtime: "automatic"}]
    - Install npm i -D @testing-library/jest-dom

# Testing File Format
    - Filename.test.js
    - Filename.spec.js
    - Filename.test.ts
    - Filename.spec.ts

- two underscores like __test__ is called dunder 
- Test cases can be grouped by "describe"