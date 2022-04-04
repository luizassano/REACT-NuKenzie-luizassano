
  
import "./App.css";
import Button from "./components/button";
import { useState } from "react";
import Form from "./components/forms";
import List from "./components/list";
import "./components/card/index";
import TotalMoney from "./components/TotalMoney";
import NuKenzie from "./Nu Kenzie.png";
import "./components/button/button.css";
import "./components/TotalMoney/index.css";
import "./components/forms/forms.css";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  return (
    <div className="App">
      <header>
        <div>
          <img src={NuKenzie} alt="Nu kenzie"></img>
          <Button className={""} btt={"todos-btt"}>
            incio
          </Button>
        </div>
      </header>
      <main>
        <div className="colum-left">
          <div className="form">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          </div>
          <TotalMoney listTransactions={listTransactions} />
        </div>

        <div className="cards">
          <div className="home-card">
            <h3>Resumo financeiro</h3>
            <div>
              <Button className={"all"}>Todos</Button>
              <Button className={"card"}>Entradas</Button>
              <Button className={"card"}>Despesas</Button>
            </div>
          </div>
          <List listTransactions={listTransactions} />
        </div>
      </main>
    </div>
  );
}

export default App;