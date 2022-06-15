//components
import NavBar from "./Components/NavBar/NavBar";

//routes
import routes from "./Routes/Routes";

//styles
import "./App.scss";
import { Container } from "./StyledComponents/Container";

function App() {
  return (
    <Container>
      <NavBar />
      {routes}
    </Container>
  );
}

export default App;
