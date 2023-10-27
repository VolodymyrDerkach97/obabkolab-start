import { useEffect, useState } from "react";

import InfoHeader from "../InfoHeader/InfoHeader";

import { Container, Header } from "./AppBar.styled";

const AppBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Header isScrolled={isScrolled}>
      <Container>
        <InfoHeader />
      </Container>
    </Header>
  );
};

export default AppBar;
