import {
  ApolloClient,
  ApolloProvider,
  gql, InMemoryCache,
  useQuery
} from "@apollo/client";
import React from "react";
import { render } from "react-dom";
import './App.css';

const client = new ApolloClient({
  uri: 'http://87.251.71.72:8000/graphql',
  cache: new InMemoryCache()
});

const GET_PRODUCTS = gql`
query Products {
  products {
    code
    price
  }
}
`;

function Products() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.products.map(({ code, price }) => (
    <div key={code}>
      <p>
        {code}: {price}
      </p>
    </div>
  ));
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Apollo Client: Ingredients 🚀</h2>
        <Products />
      </div>
    </ApolloProvider>
  );
}

render(
  <App />,
  document.getElementById('root'),
);

export default App;
