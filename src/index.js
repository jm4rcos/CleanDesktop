// import React from 'react';
// import App from './App';
// import './global.css';
// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );

//Render in ES - - - - - -

import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import "./global.css";

window.renderDOM = (props) => {
  console.log("ESCleanDesktop React initialized... ");
  ReactDOM.render(
    <React.Fragment>
      <App props={props}/>
    </React.Fragment>,
    document.getElementById("ESCleanDesktop")
  );
};