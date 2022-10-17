import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import NotFound from "./pages/notFound/NotFound";
import Template from "./pages/elements/posts/Template";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Template current="home" />}></Route>
        <Route path="n">
          <Route path="signup" element={<Signup />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Route>
        <Route path=":username" element={<Template />}></Route>
        <Route
          path=":username/followers"
          element={<Template current="followers" />}
        ></Route>
        <Route
          path=":username/following"
          element={<Template current="following" />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
