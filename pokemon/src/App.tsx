import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import { Pokemon } from "./interface";
import Home from "./page/Home";


const App: React.FC = () => {


  return (
    <div className="App bg-pattern bg-no-repeat bg-[left_-160px_top_-100px] bg-left-top bg-slate-50 w-full ">
    
      
      <div className="">  <Home/></div>

    </div>
  );
};

export default App;
