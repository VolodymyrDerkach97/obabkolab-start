import Button from "../../components/Button";
import Follow from "../../components/Follow";
import {
  AddresslLink,
  ContactsInfo,
  ContactsWpapper,
  EmailLink,
  FormContacts,
  InputContacts,
  TellLink,
  TextTellLink,
} from "./Contacts.styled";

const Contacts = () => {
  return (
    <div id="contacts">
      <ContactsWpapper>
        <iframe
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.2607294613654!2d30.47480747691083!3d50.432101371588665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cec00713dc43%3A0x6f97d799323580e1!2z0YPQuy4g0JLQsNGB0LjQu9C40Y8g0JvQuNC_0LrQvtCy0YHQutC-0LPQviwgMzPQsCwg0JrQuNC10LIsIDAzMDM1!5e1!3m2!1sru!2sua!4v1689966735787!5m2!1sru!2sua"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <ContactsInfo>
          <TellLink href="tel:+380672550705">
            +380672550705<TextTellLink>с 9:00 до 18:00 з Пн - Пт</TextTellLink>
          </TellLink>
          <Follow />
          <EmailLink href="mailto:obabko.lab@gmail.com">
            obabko.lab@gmail.com
          </EmailLink>
          <AddresslLink
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.google.com/maps/search/%D1%83%D0%BB.+%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D1%8F+%D0%9B%D0%B8%D0%BF%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE,+33%D0%B0+%D0%9A%D0%B8%D0%B5%D0%B2+03035/@50.431452,30.4762772,1330m/data=!3m1!1e3?hl=ru&entry=ttu"
          >
            Київ, вул. В.Липківського, 33 а
          </AddresslLink>
        </ContactsInfo>

        <FormContacts>
          <InputContacts placeholder="Ім'я" type="text" />
          <InputContacts placeholder="Телефон" type="phone" />
          <InputContacts placeholder="Пошта" type="email" />
          <InputContacts placeholder="Повідомлення" type="text" />
          <Button text="Надіслати" />
        </FormContacts>
      </ContactsWpapper>
    </div>
  );
};

export default Contacts;
