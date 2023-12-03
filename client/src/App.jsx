import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "./components/Header";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Project from '../../expressGraphQL/Models/Project';

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
          <Header />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="*" element={<NotFound/>} />
              <Route path="/projects/:id" element={<Project/>} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
