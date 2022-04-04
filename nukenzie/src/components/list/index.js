import Card from "../card";
const List = ({ listTransactions }) => {
  return (
    <div>
      <ul>
        {listTransactions.map((item) => (
          <Card key={item.description} obj={item} />
        ))}
      </ul>
    </div>
  );
};

export default List;