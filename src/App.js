//components
import NavBar from "./Pages/NavBar/NavBar";

//styles
import "./App.scss";
import { MainContainer } from "./StyledComponents/Container";

//react router
import { Outlet } from "react-router-dom";

function App() {
  return (
    <MainContainer>
      <NavBar />
      <Outlet />
    </MainContainer>
  );
}

export default App;
