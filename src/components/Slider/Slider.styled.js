import styled from "@emotion/styled";

export const SliderContainer = styled.div`
  margin: 0 -20px; /* Встановіть бажаний розмір проміжку між слайдами тут */
`;

export const Dots = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;

  li {
    margin: 0 5px;
    width: 10px;
    height: 10px;
    background-color: #007bff;
    border: 2px solid transparent;
    border-radius: 50%;
    cursor: pointer;

    &.slick-active button:before {
      color: red !important;
    }

    &.button:before {
      color: #686868 !important;
    }

    &.slick-active {
      background-color: red; // Цвет активной точки
    }
  }
`;
