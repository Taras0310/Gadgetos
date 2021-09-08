
import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './Contact/Contact';
import Home from './Home/Home';

import Signup from './component/Login/Signup';
import Login from './component/Login/Login';
import  AuthProvider from './Context/AuthContext'
import Profile from './Profile/Profile';

import AdminPage from './Admin/AdminPage';
function App() {
  return (

    
    <BrowserRouter>
   
      <div className="app"> 
         <AuthProvider>
        <Header></Header>
        
        <Switch>
          <Route exact path= '/' component={Home} />
          <Route  path= '/contact' component={Contact} />
          <Route  path= '/signup' component={Signup} />
          <Route  path= '/login' component={Login} />
          <Route  path= '/profile' component={Profile} />
          <Route  path= '/admin' component={AdminPage} />
        </Switch>
       
        
        </AuthProvider>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
