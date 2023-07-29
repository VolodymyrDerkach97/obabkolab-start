import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  /* outline: 2px dashed pink; */
`;
export const ContactWrapper = styled.div`
  display: flex;
  gap: 25px;
  margin-left: auto;
  align-items: center;
`;

export const ContactList = styled.div`
  display: flex;
  gap: 15px;

  align-items: center;
  /* outline: 2px dashed green; */
`;
export const TellLink = styled.a`
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  color: grey;
`;
export const TextTellLink = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin: 0;
`;
