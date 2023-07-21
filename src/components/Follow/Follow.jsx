import { BsInstagram } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FollowList } from "./Follow.styled";

const FollowLink = () => {
  return (
    <FollowList>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://instagram.com/obabkolab?igshid=MzRlODBiNWFlZA=="
        >
          <BsInstagram size={50} color="mediumpurple" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="viber://chat?number=+380672550705"
        >
          <FaViber size={50} color="purple" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://youtube.com/@ObabkoStudy?feature=sharea"
        >
          <AiOutlineYoutube size={60} color="red" />
        </a>
      </li>
    </FollowList>
  );
};

export default FollowLink;
