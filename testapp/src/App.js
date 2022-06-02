
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from './component/pages/Login';
import Register from './component/pages/Register';


function App() {
  return (
    <div>         
      <Router>
      <Link to="/Login">Login</Link>
      <Link to="/register">Sign Up</Link>
<Routes>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
</Routes>
      </Router>            
      </div>

  );
}

export default App;
