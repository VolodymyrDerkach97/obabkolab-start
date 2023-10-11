import { Container, Header } from "./AppBar.styled";

import InfoHeader from "../InfoHeader/InfoHeader";

const AppBar = () => {
  return (
    <Header>
      <Container>
        <InfoHeader />
      </Container>
    </Header>
  );
};

export default AppBar;
