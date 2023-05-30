import React from "react";
// React Router Dom
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
//import pages
import RootLayouts from "./components/RootLayouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";


//

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayouts />}>
                <Route index element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/shop" element={<Shop />}></Route>
           
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}
export default App;
