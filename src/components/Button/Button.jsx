import { ButtonStyled } from "./Button.styled";

const Button = ({ typeButton = "submit", text, onClick }) => {
  return (
    <ButtonStyled type={typeButton} onClick={onClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
