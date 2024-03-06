import { HashRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";

import { NavBar} from "./Shopping/NavBar";
import { Home } from "./Shopping/Home";
import { Cart } from "./Shopping/Cart";
import { StoreSet } from "./Shopping/store";


function App() {
  return (
    <div >
  <Provider store={StoreSet}>
   <HashRouter>
   <Routes>
    <Route path="/" element={<NavBar/>}>
    <Route index element={<Home/>}/>
    <Route path ="cart/:id" element={<Cart/>}/>
    </Route>
   </Routes>
   </HashRouter>
   </Provider>
    </div>
  );
}

export default App;
