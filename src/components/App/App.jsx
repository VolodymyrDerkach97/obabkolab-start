import Layout from "../Layout/Layout";
import HomeSection from "components/sections/Home";
import Title from "components/sections/Title";
import Team from "components/sections/Team";

// import OrderSection from "../sections/Order";
// import OfferSection from "../sections/Offer";
// import PriceSection from "../sections/Order";
// import EducationSection from "../sections/Education";
// import ContactsSection from "../sections/Contacts";
import { Container } from "./App.styled";

function App() {
  return (
    <>
      <Layout />
      <Container>
        <HomeSection />
        <Title />
        <Team />
        {/* <OrderSection /> */}
        {/* <OfferSection /> */}
        {/* <PriceSection /> */}
        {/* <EducationSection /> */}
        {/* <ContactsSection /> */}
      </Container>
    </>
  );
}

export default App;
