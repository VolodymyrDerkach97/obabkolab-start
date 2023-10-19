// import SimpleSlider from "../../components/Slider";
import ButtonComponent from "components/Button";

import { ButtonWraper } from "./Home.styled";

const Home = () => {
  return (
    <section id="home">
      <h1>
        Цифрова зуботехнічна лаболаторія
        <br /> OBABKOLAB
      </h1>

      <ButtonWraper>
        <ButtonComponent typeButton={"button"}>
          Замовити прайс-лист
        </ButtonComponent>
        <ButtonComponent typeButton={"button"} variant="secondary">
          Замовити консультацію
        </ButtonComponent>
      </ButtonWraper>

      {/* <SimpleSlider /> */}
    </section>
  );
};

export default Home;
