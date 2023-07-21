import Follow from "../Follow";
import {
  ContactList,
  ContactWrapper,
  Container,
  FeedbackBtn,
  TellLink,
  TextTellLink,
} from "./InfoHeader.styled";

const InfoHeader = () => {
  return (
    <Container>
      <div>
        <a href="/">
          <img src="./logo.jpg" alt="logo-obabkolab" width="320" height="120" />
        </a>
      </div>
      <ContactWrapper>
        <Follow />
        <ContactList>
          <TellLink href="tel:+380672550705">
            +380672550705<TextTellLink>с 9:00 до 18:00 з Пн - Пт</TextTellLink>
          </TellLink>
        </ContactList>
        <FeedbackBtn>Зворотній зв'язок</FeedbackBtn>
      </ContactWrapper>
    </Container>
  );
};

export default InfoHeader;
