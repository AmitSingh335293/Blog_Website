// import Home from "./pages/home/Home";
// import TopBar from "./components/topbar/TopBar";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
// import Settings from "./pages/settings/Settings";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import { Outlet, Link,Routes, Route, BrowserRouter } from "react-router-dom";
// import { useContext } from "react";
// import { Context } from "./context/Context";

// function App() {
//   const { user } = useContext(Context);
//   return (
//     <BrowserRouter>
//       <TopBar />
//       <Routes>
//         <Route  path="/">
//           <Home />
//         </Route>
//         <Route path="/register">{user ? <Home /> : <Register />}</Route>
//         <Route path="/login">{user ? <Home /> : <Login />}</Route>
//         <Route path="/write">{user ? <Write /> : <Register />}</Route>
//         <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
//         <Route path="/post/:postId">
//           <Single />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
    const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
              element={user? <Home/>:<Register />}
        />
        <Route
          path="/login"
              element={user? <Home/>:<Login />}
        />
        <Route
          path="/write"
              element={<Write />}   
        />
        <Route
          path="/settings"
         
              element={<Settings />}
              caseSensitive={true}
           
        />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// "proxy": "http://127.0.0.1:5000/api"