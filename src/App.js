//components
import NavBar from "./Components/NavBar/NavBar";

//routes
import routes from "./Routes/Routes";

//styles
import "./App.scss";
import { MainContainer } from "./StyledComponents/Container";

function App() {
  return (
    <MainContainer>
      <NavBar />
      {routes}
    </MainContainer>
  );
}

export default App;
