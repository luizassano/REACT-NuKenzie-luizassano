const Card = ({ obj }) => {
  return obj.type === "entrada" ? (
    <div className="div-entrada div-Card">
      <div>
        <h3>{obj.description}</h3>
        <span className="valor">{obj.value}</span>
        
      </div>

      <span>{obj.type}</span>
    </div>
  ) : (
    <div className="div-saida  div-Card">
      <div>
        <h3>{obj.description}</h3>
        <span className="valor"> {obj.value}</span>
      
      </div>

      <span>{obj.type}</span>
    </div>
  );
};
export default Card;