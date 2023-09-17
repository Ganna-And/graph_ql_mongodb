import Header from "./components/assets/Header";
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'


const client = new ApolloClient({
  uri:'http://localhost:5000/graphql',
  cache: InMemoryCache(),
})
function App() {
  return (
    <ApolloProvider client={client}> 
      <Header />
    <div className="container">
     <h1>Hello App</h1>
    </div>
    </ApolloProvider>
  );
}

export default App;
