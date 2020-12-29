import Link from "next/Link";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">
        <a>Kembali Ke Home Page</a>
      </Link>
      <Avatar
        alt="xxx"
        src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b4/b44b67ef0584725dc29be77e21c167db38abd066_full.jpg"
      />
      <Chip label="Ini adalah Chip" />
    </div>
  );
};

export default About;
