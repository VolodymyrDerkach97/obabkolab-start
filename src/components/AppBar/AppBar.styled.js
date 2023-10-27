import styled from "@emotion/styled";

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  background-color: ${(props) =>
    props.isScrolled ? "rgba(6,5,7,.95)" : "transparent"};
`;

export const Container = styled.div`
  position: relative;
  width: 1200px;
  padding: 0 30px;
  margin-left: auto;
  margin-right: auto;
`;
