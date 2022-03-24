import Logo from "../Logo";
import "./styles.css";
import Button from "../Button";

function Menu() {
  return (
    <div class="menu-container">
      <div class="menu">
        <div>
          <Logo />
        </div>

        <div class="links">
          <div>StarterPack</div>
          <div>Evolution</div>
          <div>Specialist</div>
        </div>

        <div class="right">
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Menu;
