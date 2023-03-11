import {Routes,Route } from "react-router-dom";
import React from "react";
import { SelectBranch } from "./components/SelectBranch";
import './App.css';
import { Header } from "./components/Header";

import { Class1 } from "./components/AttendanceSheet/Class1";
import { Class2 } from "./components/AttendanceSheet/Class2";
import { Class4 } from "./components/AttendanceSheet/Class4";
import { Class3 } from "./components/AttendanceSheet/Class3";
import {Class5} from "./components/AttendanceSheet/Class5";
import Calendar from "./components/Header_Assets/Calendar";
function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<SelectBranch />}/>
      <Route path="/Calendar" element={<Calendar />}/>
      <Route path="/Class1" element={<Class1 />}/>
      <Route path="/Class2" element={<Class2/>}/>
      <Route path="/Class3" element={<Class3/>}/>
      <Route path="/Class4" element={<Class4/>}/>
      <Route path="/Class5" element={<Class5/>}/>
    </Routes>
    </>
   
  );
}

export default App;
