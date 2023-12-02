import { gql, useQuery } from "@apollo/client";

const GET_CLIENTS = gql`
   query getClients {
    {
        clients{
          id,
          name
        }
      }
}
`;

const Clients = () => {
  return <div>clients</div>;
};

export default Clients;
