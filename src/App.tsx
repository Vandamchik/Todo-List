import React from 'react';
import { Navbar } from "./components/Navbar";
import {TodosPage} from "./pages/TodosPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AboutPage} from "./pages/AboutPage";


export const App: React.FC = () => {


  return(
      <>
        <Navbar />
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<TodosPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </BrowserRouter>
        </div>
      </>
  );
}




