import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
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
        <Router>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0",
            alignItems: "center",
            margin: "0",
            gap:"3rem",
            height:"100vh"
          }}
        >
          <Header />
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",gap:"6rem",width:"99%",height:"50vh",marginTop:"14vh"}}>
          <Clients/>
          <AddClient/>
          </div>
          <div style={{width:'90%',height:"60vh"}}>
           <Projects/>
          </div>
        </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
