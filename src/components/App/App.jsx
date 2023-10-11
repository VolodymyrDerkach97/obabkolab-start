import Layout from "../Layout/Layout";
import HomePage from "../../pages/Home/Home";
import OrderPage from "../../pages/Order";
import OfferPage from "../../pages/Offer";
import PricePage from "../../pages/Order";
import EducationPage from "../../pages/Education";
import ContactsPage from "../../pages/Contacts";
import { Container } from "./App.styled";

function App() {
  return (
    <>
      <Layout />
      <Container>
        <HomePage />
        <OrderPage />
        <OfferPage />
        <PricePage />
        <EducationPage />
        <ContactsPage />
      </Container>
    </>
  );
}

export default App;
