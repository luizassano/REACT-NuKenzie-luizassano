const TotalMoney = ({ listTransactions }) => {
    return (
      <div className="div-total">
        <span>Valor total:</span>
        <span>
          {listTransactions.reduce((valorAntigo, ValorAtual) => {
            return ValorAtual.value + valorAntigo;
          }, 0)}
        </span>
      </div>
    );
  };
  export default TotalMoney;