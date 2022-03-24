import LogoImagem from "./images/front-academy-logo.png";
import "./styles.css";

function Logo() {
  return (
    <div>
      <img class="logo" src={LogoImagem} alt="Logo Front Academy" />
    </div>
  );
}

export default Logo;
