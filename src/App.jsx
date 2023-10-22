import {Routes, Route} from "react-router-dom";
import {Layout} from "./pages/Layout";
import {Home} from "./pages/Home/Home";
import {Bin} from "./pages/Bin/Bin";
import {Item} from "./pages/Item/Item";
import {Filter} from "./components/Filter/Filter";
import {FilterPage} from "./pages/FilterPage/FilterPage";
import {CategoryPage} from "./pages/CategoryPage/CategoryPage";
import {Account} from "./pages/Account/Account";
import {Orders} from "./pages/Orders/Orders";
import {Order} from "./pages/Order/Order";
import {AboutUs} from "./pages/AboutUs/AboutUs";
import {AboutInfo} from "./pages/AboutInfo/AboutInfo";

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout/>} >
            <Route path="" element={<Home />} />
            <Route path="bin" element={< Bin/>} />
            <Route path="item/:id" element={<Item />} />
            <Route path="filter" element={<FilterPage/>}/>
            <Route path="category" element={<CategoryPage/>}/>
            <Route path="account" element={<Account/>}/>
            <Route path="orders" element={<Orders/>}/>
            <Route path="order/:id" element={<Order/>}/>
            <Route path="about" element={<AboutUs/>}/>
            <Route path="aboutInfo" element={<AboutInfo/>}/>
        </Route>

      </Routes>
  );
}
