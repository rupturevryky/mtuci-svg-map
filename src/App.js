import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home/Home"
import Header from "./components/Header/Header";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={}/> */}
        </Route>
      </Routes>
    </>
  )
}

export default App;
