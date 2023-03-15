import { Link } from "react-router-dom";
import cardhome from "../../assets/cardhome2.png";
import { HomeStyle } from "./style";
import logoBlack from "../../assets/logoblack.png";
const Home = () => {
  return (
    <HomeStyle>
      <section>
        <header>
          <img src={logoBlack} alt="logo" />
          <h1 className="title1">Centralize o controle das suas finanças</h1>
          <h3 className="Body">De forma rápida e segura</h3>
          <Link className="buttonDash Headline" to={"/dashboard"}>
            Iniciar
          </Link>
        </header>
        <div>
          <img src={cardhome} alt="imagem de card dashboard" />
        </div>
      </section>
    </HomeStyle>
  );
};

export default Home;
