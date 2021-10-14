import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import ListEmployee from './components/ListEmployee';
import CreateOrUpdateEmployee from './components/CreateOrUpdateEmployee';
import ViewEmployee from './components/ViewEmployee';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={ListEmployee} />
          <Route path='/add-employee' component={CreateOrUpdateEmployee} />
          <Route path='/update-employee/:id' component={CreateOrUpdateEmployee} />
          <Route path='/employee/:id' component={ViewEmployee} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
