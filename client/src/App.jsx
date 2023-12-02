import { useState } from "react";
import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "./components/Header";
import Clients from "./components/clients";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
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
          <p>Lets goooooo</p>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
