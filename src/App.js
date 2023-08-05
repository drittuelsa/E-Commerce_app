

//  import './style.css';
// import './table.css';
// import { Provider } from "react-redux";
// import { DefaultStore1 } from "./assignment/store1";
// import { ReduxTable } from "./ReduxTable";
import { HashRouter, Route, Routes} from "react-router-dom";
// import { Update } from "./Edit";



// import { Home } from "./Assignment1/Home";
// import { StoreData } from "./Assignment1/store";
// import { NavBar } from "./eCommerce/NavBar";
// import { Home } from "./eCommerce/Home";
// import { About } from "./eCommerce/About";
// import { Contact } from "./eCommerce/Contact";
import { Provider } from "react-redux";
// import { StoreSet } from "./eCommerce/store";
// import { Cart } from "./eCommerce/Cart";

import { NavBar} from "./Shopping/NavBar";
import { Home } from "./Shopping/Home";
import { Cart } from "./Shopping/Cart";
import { StoreSet } from "./Shopping/store";



function App(){ 
 
   
  return(
    <div>
      {/* <Provider store ={DefaultStore1}>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<ReduxTable/>}></Route>
     <Route path="/Edit/:id"  element={<Update/>}></Route>
     </Routes>
     </BrowserRouter>
      <Home/> 
  </Provider>*/}
  <Provider store={StoreSet}>
   <HashRouter>
   <Routes>
    <Route path="/" element={<NavBar/>}>
    <Route index element={<Home/>}/>
   
    {/* <Route path ="about" element={<About/>} />
    <Route path ="contact" element={<Contact/>} /> */}
    <Route path ="cart/:id" element={<Cart/>}/>
    {/* <Route path ="/:id" element={<CardDetail/>}/> */}
    </Route>
   </Routes>
   </HashRouter>
   </Provider>
    </div>
  )
}

export default App;
    


