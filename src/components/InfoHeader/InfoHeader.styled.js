import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactWrapper = styled.div`
  display: flex;
  gap: 35px;
  margin-left: auto;
  margin-right: 80px;
`;

export const ContactList = styled.div`
  display: flex;
  gap: 15px;

  align-items: center;
  justify-content: center;
`;

export const TellLink = styled.a`
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: white;
`;

export const TextTellLink = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 0;
`;
