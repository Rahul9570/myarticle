import React, {Component} from "react";
import './App.css';
import { Navbar } from "./components/Navbar";
import NytimesArticle from "./components/NytimesArticle";

export default class App extends Component{


render() {
return(
  <div>
    <Navbar />
    <NytimesArticle />
  </div>
)

}

}
