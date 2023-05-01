import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import React from "react";
import {BrowserRouter,Route,Routes } from "react-router-dom";  
import Post from "./components/post/Post";
import Posts from "./components/posts/Posts";
import Single2 from "./pages/single/Single2";
import Single3 from "./pages/single/Single3";
import Single4 from "./pages/single/Single4";
import Single5 from "./pages/single/Single5";
import Single6 from "./pages/single/Single6";
import About from "./pages/about/About";

function App() {
  const user =true ;
  return (

    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={user ? <Login /> :<Login/>} />
        <Route path="/write" element={user ? <Write /> :<Register/>} />
        <Route path="/settings" element={user ? <Settings /> :<Register/>} />
        <Route path="/post/:postId" element={<Post/>} />
        <Route path="/single" element={<Single/>} />
        <Route path="/single2" element={<Single2/>} />
        <Route path="/single3" element={<Single3/>} />
        <Route path="/single4" element={<Single4/>} />
        <Route path="/single5" element={<Single5/>} />
        <Route path="/single6" element={<Single6/>} />
        <Route path="/about" element={<About/>} />

       </Routes>
     </BrowserRouter>


  );
}

export default App;
