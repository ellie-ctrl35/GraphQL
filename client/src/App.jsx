
import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "./components/Header";
import Clients from "./components/clients";
import AddClient from "./AddClient";
import Projects from "./components/Projects";

const cache = new InMemoryCache({
  typePolicies:{
    Query:{
      fields:{
        clients:{
          merge(existing,incoming){
            return incoming;
          }
        },
        projects:{
          merge(existing,incoming){
            return incoming;
          }
        }
      }
    }
  }
})

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache,
  });
  return (
    <>
      <ApolloProvider client={client}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0",
            alignItems: "center",
            margin: "0",
          }}
        >
          <Header />
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",gap:"6rem"}}>
          <Clients/>
          <AddClient/>
          </div>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",gap:"6rem",background:'dodgerblue',width:'20%',height:"20%"}}>
           <Projects/>
          </div>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
