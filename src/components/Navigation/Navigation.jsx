import { useState } from "react";
import {
  LinkStyled,
  NavStyled,
  TextMenu,
  Wrapper,
  WrapperBurger,
} from "./Navigation.styled";

import { RxHamburgerMenu } from "react-icons/rx";

const Navigation = () => {
  const [inBurger, setInBurger] = useState(true);

  const togleBurger = () => {
    setInBurger((prev) => !prev);
  };

  return (
    <Wrapper onClick={togleBurger}>
      <WrapperBurger>
        <RxHamburgerMenu size={28} color="white" />
        <TextMenu>МЕНЮ</TextMenu>
      </WrapperBurger>
      {!inBurger && (
        <NavStyled>
          <LinkStyled href="#home">Домашня сторінка</LinkStyled>
          <LinkStyled href="#order">Замовити шаблон</LinkStyled>
          <LinkStyled href="#public-offer">Публічна оферта</LinkStyled>
          <LinkStyled href="#price">Ціни</LinkStyled>
          <LinkStyled href="#education">Навчання</LinkStyled>
          <LinkStyled href="#contacts">Контакти</LinkStyled>
        </NavStyled>
      )}
    </Wrapper>
  );
};
export default Navigation;
