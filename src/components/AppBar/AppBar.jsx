import { Container } from "./AppBar.styled";
import Navigation from "../Navigation";
import InfoHeader from "../InfoHeader/InfoHeader";

const AppBar = () => {
  return (
    <header>
      <Container>
        <InfoHeader />
        <Navigation />
      </Container>
    </header>
  );
};

export default AppBar;
