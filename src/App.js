import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home/Home"
import Header from "./components/Header/Header";
import { DialogSearcher } from "./components/DialogSearcher/DialogSearcher";



const App = () => {
  return (
    <>
      <DialogSearcher />
      <Header />
      <Routes>
        <Route path="mtuci-svg-map/" element={<Home />}>
          {/* <Route index element={}/> */}
        </Route>
      </Routes>
    </>
  )
}

export default App;
