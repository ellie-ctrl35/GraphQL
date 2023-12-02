import { Link } from "react-router-dom";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import Header from "./components/Header";
import Clients from "./components/clients";

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading</p>;
  if (error) return <p> Something went wrong</p>;

  return (
    <div>
      <Header />
      <Clients clients={data.clients} />
      <Link to="/some-other-route">Go to Some Other Route</Link>
    </div>
  );
};

export default Home;
