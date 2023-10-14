import {Routes, Route} from "react-router-dom";
import {Layout} from "./pages/Layout";
import {Home} from "./pages/Home/Home";
import {Bin} from "./pages/Bin/Bin";
import {Item} from "./pages/Item/Item";

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout/>} >
            <Route path="" element={<Home />} />
            <Route path="bin" element={< Bin/>} />
            <Route path="item/:id" element={<Item />} />
        </Route>

      </Routes>
  );
}
