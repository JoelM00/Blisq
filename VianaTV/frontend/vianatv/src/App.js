import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

// page & layout imports
import Homepage from './pages/Homepage'


// Apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
})


function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <Homepage />
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App
