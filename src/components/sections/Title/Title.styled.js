import styled from "@emotion/styled";

export const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;

  width: 100%;
`;

export const ItemStyled = styled.li`
  width: calc(100% / 4 - 20px);
  padding: 10px 20px;

  background: #060507;
  border-radius: 0;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;
