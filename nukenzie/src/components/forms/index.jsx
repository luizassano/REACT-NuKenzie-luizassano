import { useState } from "react";
import Button from "../button";
const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("entrada");

  function saida() {
    if (type === "saida") {
      return Number(-value);
    } else {
      return Number(value);
    }
  }
  async function add(e) {
    e.preventDefault();

    const newTransactions = {
      description,
      type: type,
      value: saida(),
    };
    await setListTransactions([...listTransactions, newTransactions]);
  }
  return (
    <form className="form-style" onSubmit={add}>
      <input
        className="input-desc"
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Digite aqui sua descrição"
      />

      <div className="input-sele">
        <input
          className="input-value"
          placeholder="1       R$"
          onChange={(e) => setValue(e.target.value)}
        />
        <select onChange={(e) => setType(e.target.value)} value={type}>
          <option value="entrada">entrada</option>
          <option value="saida">saida</option>
        </select>
      </div>

      <Button className={"form"} btt={"todos-btt"} type={"submit"}>
        Inserir valor
      </Button>
    </form>
  );
};

export default Form;