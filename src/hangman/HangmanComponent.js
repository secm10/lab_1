import React from "react";
import { KeyBoardComponent } from "./components/KeyBoardComponent";
import "./styles.css";

export const HangmanComponent =() => {
    return(
        <div>
            <h1>hangman</h1>
           <hr /> 
           <KeyBoardComponent />
        </div>
    );
};
