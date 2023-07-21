import { Route, Routes } from "react-router-dom";

import Layout from "../Layout/Layout";
import HomePage from "../../pages/Home/Home";
import OrderPage from "../../pages/Order";
import OfferPage from "../../pages/Offer";
import PricePage from "../../pages/Order";
import EducationPage from "../../pages/Education";
import ContactsPage from "../../pages/Contacts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/public-offer" element={<OfferPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
