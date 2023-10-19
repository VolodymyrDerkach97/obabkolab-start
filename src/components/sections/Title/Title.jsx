import { ListStyled, ItemStyled } from "./Title.styled";
const titleBlockText = [
  "Ми знаємо, що таке точність, тому використовуємо передове обладнання",
  "Ми виготовляємо протезування згідно усіх зуботехнічних протоколів",
  "Ми використовуємо матеріали тільки перевіреної якості",
  "Все, що можна перевести в цифровий протокол - ми переводимо",
  "Ми працюємо з кожним містом України",
  'Наша філософія це "Контроль. Якість. Естетика. Сервіс."',
];
const Title = () => {
  return (
    <section id="title">
      <h2>Чому варто обрати саме нас?</h2>
      <ListStyled>
        {titleBlockText.map((text) => (
          <ItemStyled key={text}>{text}</ItemStyled>
        ))}
      </ListStyled>
    </section>
  );
};
export default Title;
