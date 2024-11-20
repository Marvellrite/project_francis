import "./styles/_App.scss";
import "./styles/_shared.scss";

import Calculate from "./components/Calculate.tsx";
// import Navbar from "./components/Navbar.tsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Outlet,
} from "react-router-dom";
// import Login from "./components/dashboard.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Calculate />} path="/calculate" />
      </Routes>
    </Router>
  );
};

// const NavbarAided = () => {
//   return (
//     <div className="NavBarAided d-flex ">
//       <Navbar></Navbar>
//       <div className="d-flex flex-column w-100">
//         <div
//           className="position-fixed w-100 d-none d-lg-flex"
//           style={{ left: "0px", top: "0px" }}>
//           <div style={{ width: "320px" }}></div>
//           <div className="header_separator bg-white w-100 "></div>
//         </div>

//         <div className="outlet_holder rounded-2 w-100">
//           <Outlet></Outlet>
//         </div>
//       </div>
//     </div>
//   );
// };

export default App;
