import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponents from "./components/HeaderComponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeHomePage from "./components/EmployeeHomePage";
import EmployeeComponent from "./components/EmployeeComponent";
import LoginPage from "./components/LoginPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponents />
          <Routes>
            <Route path="/" element= {<EmployeeHomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/api/employees" element= {<ListEmployeeComponent />}></Route>
            <Route path="/add-employee" element={<EmployeeComponent />}></Route>
            <Route path="/edit-employee/:id" element={<EmployeeComponent />}></Route>
            {/* <Route path="/employee-cards" element={<EmployeeCards />}></Route> */}
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
