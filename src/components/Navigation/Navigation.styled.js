import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 321px;

  width: 225px;
  padding: 23px 40px;
  padding-right: 0;

  cursor: pointer;
  &:hover {
    background-color: rgb(54, 175, 173);
  }
`;
export const WrapperBurger = styled.div`
  display: flex;
  align-items: center;
`;
export const TextMenu = styled.p`
  margin-left: 10px;
  font-size: 22px;
`;

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: start;

  font-size: 20px;
  color: white;
`;

export const LinkStyled = styled.a`
  color: white;
  &:hover {
    color: gray;
  }
`;
