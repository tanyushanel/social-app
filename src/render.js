import React from 'react';
import  { addPost } from "./state";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

export let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={ state }
                     addPost={ addPost }/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}