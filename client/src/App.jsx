import { useState } from "react";
import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "./components/Header";
import Clients from "./components/clients";

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
          <Clients/>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
