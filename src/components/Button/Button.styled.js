import styled from "@emotion/styled";

export const CommonButtonStyles = `
  min-width: 150px;
  padding: 15px;

  font-size: 20px;

  border: 0 solid black;
 
`;

export const ButtonPrimary = styled.button`
  ${CommonButtonStyles};
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.accent};

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const ButtonSecondary = styled.button`
  ${CommonButtonStyles};
  color: ${(props) => props.theme.colors.accent};
  background-color: ${(props) => props.theme.colors.secondary};
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

export const Text = styled.button`
  background-color: ${(props) => props.theme.colors.accent};
`;
