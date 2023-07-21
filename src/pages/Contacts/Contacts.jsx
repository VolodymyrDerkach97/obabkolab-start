import Follow from "../../components/Follow";
import {
  ContactsInfo,
  ContactsWpapper,
  FormContacts,
  Inputontacts,
} from "./Contacts.styled";

const Contacts = () => {
  return (
    <ContactsWpapper>
      <iframe
        title="maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.2607294613654!2d30.47480747691083!3d50.432101371588665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cec00713dc43%3A0x6f97d799323580e1!2z0YPQuy4g0JLQsNGB0LjQu9C40Y8g0JvQuNC_0LrQvtCy0YHQutC-0LPQviwgMzPQsCwg0JrQuNC10LIsIDAzMDM1!5e1!3m2!1sru!2sua!4v1689966735787!5m2!1sru!2sua"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <ContactsInfo>
        <a href="tel:+380672550705">
          +380672550705<p>с 9:00 до 18:00 з Пн - Пт</p>
        </a>
        <Follow />
        <a href="obabko.lab@gmail.com">obabko.lab@gmail.com</a>
        <p>Київ, вул. В.Липківського, 33 а</p>
      </ContactsInfo> */}

      <FormContacts>
        <Inputontacts placeholder="Ім'я" type="text" />
        <Inputontacts placeholder="Телефон" type="phone" />
        <Inputontacts placeholder="Пошта" type="email" />
        <Inputontacts placeholder="Повідомлення" type="text" />
      </FormContacts>
    </ContactsWpapper>
  );
};

export default Contacts;
