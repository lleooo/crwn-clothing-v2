import {Routes, Route, Outlet} from "react-router-dom";

import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.components";

const Navigation = () => {
  return (
    <div>
      <h1>我是導航</h1>
      <Outlet></Outlet>
    </div>
  );
};


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<Home />}></Route>
        <Route path="signIn" element = {<SignIn/>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
