import { useState } from "react";
import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "./components/Header";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider>
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
          <h1>Hello world</h1>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
