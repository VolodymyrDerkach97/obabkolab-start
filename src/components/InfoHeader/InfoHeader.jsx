import { useState } from "react";
import Follow from "../Follow";
import {
  ContactList,
  ContactWrapper,
  Container,
  TellLink,
  TextTellLink,
} from "./InfoHeader.styled";
import Modal from "../Modal/Modal";
import Navigation from "../Navigation";

const InfoHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const togleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <Container>
      {showModal && <Modal onClose={togleModal} />}
      <div>
        <a href="/">
          <img
            src="./logo.jpg"
            alt="logo-obabkolab"
            width="320"
            height="120"
            style={{ backgroundColor: "black" }}
          />
        </a>
      </div>
      <Navigation />
      <ContactWrapper>
        <Follow />
        <ContactList>
          <TellLink href="tel:+380672550705">
            +380672550705<TextTellLink>с 9:00 до 18:00 з Пн - Пт</TextTellLink>
          </TellLink>
        </ContactList>
      </ContactWrapper>
    </Container>
  );
};

export default InfoHeader;
