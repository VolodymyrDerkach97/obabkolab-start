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
export const FeedbackBtn = styled.button`
  height: 55%;
  width: 150px;

  font-size: 18px;

  color: white;
  background-color: #2196f3;
  border-radius: 15px;
  border: 0 solid black;
`;
