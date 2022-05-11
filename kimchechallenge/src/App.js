import React from "react";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import Countries from "./components/countries";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Countries/>
  </ApolloProvider>
);
export default App;
