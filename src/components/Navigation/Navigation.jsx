import { NavLink } from "react-router-dom";
import { NavStyled } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavStyled>
      <NavLink to="/">Домашня сторінка</NavLink>
      <NavLink to="/order">Замовити шаблон</NavLink>
      <NavLink to="/public-offer">Публічна оферта</NavLink>
      <NavLink to="/price">Ціни</NavLink>
      <NavLink to="/education">Навчання</NavLink>
      <NavLink to="/contacts">Контакти</NavLink>
    </NavStyled>
  );
};
export default Navigation;
