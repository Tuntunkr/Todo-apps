import "bootstrap/dist/css/bootstrap.min.css"; 
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import CreateTodo from './Component/create-todo.component';
import TodosList from './Component/Todoslist.component';
import EditTodo from './Component/edit-todo.component';
import logo from "./logo.png";

function App() {
  return (

  <Router>
    <div className="container">
        
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/createTodo" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
      <Route exact path ="/"  component={TodosList} />
      <Route exact path="/CreateTodo" component={CreateTodo} />
      <Route exact path="/Edit/:id" component ={EditTodo} />


    </div>
    
  </Router>
  );
}

export default App;
