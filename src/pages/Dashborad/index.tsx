import Header from "../../components/Header";
import Form from "../../components/Form";
import List from "../../components/List";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="containerMain">
        <Form />
        <List />
      </div>
    </>
  );
};

export default Dashboard;
