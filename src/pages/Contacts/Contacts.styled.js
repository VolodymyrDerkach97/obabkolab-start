import styled from "@emotion/styled";

export const ContactsWpapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding-top: 40px;
`;

export const FormContacts = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  margin-right: 100px;
  width: 500px;
`;

export const InputContacts = styled.input`
  height: 50px;
  padding-left: 15px;
`;
export const ButtonForm = styled.button`
  margin-left: auto;
  min-width: 100px;
  height: 50px;
`;
export const ContactsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 50px;

  text-align: center;
`;

export const TellLink = styled.a`
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  color: grey;
  &:hover {
    color: #2196f3;
  }
`;
export const TextTellLink = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  &:hover {
    color: #2196f3;
  }
`;

export const EmailLink = styled.a`
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  color: grey;
  &:hover {
    color: #2196f3;
  }
`;
export const AddresslLink = styled.a`
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  color: grey;
  &:hover {
    color: #2196f3;
  }
`;
