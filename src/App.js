import {Routes, Route} from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Auth from "./routes/auth/authentication.component";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="auth" element={<Auth />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
