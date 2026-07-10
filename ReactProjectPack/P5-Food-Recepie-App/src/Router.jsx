

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Details from "./pages/details";
import Favorites from "./pages/favorites";
import Navbar from "./components/navbar"


function Router() {


    return (
        <BrowserRouter>

         <Navbar/>
         
            <Routes>

                <Route 
                path="/"
                element={<Home/>}
                />

                <Route 
                path="/recipe/:id"
                element={<Details/>}
                />

                <Route 
                path="/favorites"
                element={<Favorites/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router