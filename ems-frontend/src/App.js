import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import ListEmployee from './components/ListEmployee';
import CreateEmployee from './components/CreateEmployee';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={ListEmployee} />
          <Route path='/add-employee' component={CreateEmployee} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
