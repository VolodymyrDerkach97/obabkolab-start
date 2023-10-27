import Layout from "../Layout/Layout";
import HomeSection from "components/sections/Home";
import Title from "components/sections/Title";
import Team from "components/sections/Team";

import OrderSection from "components/sections/Order";
import OfferSection from "components/sections/Offer";
import PriceSection from "components/sections/Order";
import EducationSection from "components/sections/Education";
import ContactsSection from "components/sections/Contacts";

import { Container } from "./App.styled";
import Instagram from "components/Instagram";

function App() {
  return (
    <>
      <Layout />
      <Container>
        <HomeSection />
        <Title />
        <Team />
        <Instagram />
        <OrderSection />
        <OfferSection />
        <PriceSection />
        <EducationSection />
        <ContactsSection />
      </Container>
    </>
  );
}

export default App;
