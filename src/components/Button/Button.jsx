import { ButtonSecondary, ButtonPrimary } from "./Button.styled";

const ButtonComponent = ({
  variant = "primary",
  typeButton,
  onClick,
  children,
}) => {
  return variant !== "primary" ? (
    <ButtonSecondary type={typeButton} onClick={onClick}>
      {children}
    </ButtonSecondary>
  ) : (
    <ButtonPrimary type={typeButton} onClick={onClick}>
      {children}
    </ButtonPrimary>
  );
};

export default ButtonComponent;
