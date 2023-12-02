import { gql, useQuery } from "@apollo/client";
import ClientRow from './ClientRow'
import { GET_CLIENTS } from "../../Queries/clientQueries";

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  
  if (loading) return <p>Loading</p>;
  if (error) return <p> Something went wrong</p>;

  return (
    <div>
      {!loading && !error && (
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {data.clients.map(client =>(
                    <ClientRow key={client.id} client={client}/>
                ))}
            </tbody>
        </table>
      )}
    </div>
  );
};

export default Clients;
