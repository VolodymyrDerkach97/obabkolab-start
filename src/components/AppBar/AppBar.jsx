import { Container } from "./AppBar.styled";
import Navigation from "../Navigation";

const AppBar = () => {
  return (
    <header>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default AppBar;
