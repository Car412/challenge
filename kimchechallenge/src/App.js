import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Home from "./components/home";


const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",  
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <div>
        <h1 className="App-header">Country Search</h1>
        </div>      
      <Home/>
    </div>
  </ApolloProvider>
);

export default App;
