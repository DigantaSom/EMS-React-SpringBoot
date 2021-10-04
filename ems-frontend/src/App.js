import './App.css';
import Footer from './components/Footer';

import Header from './components/Header';
import ListEmployee from './components/ListEmployee';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <ListEmployee />
      </div>
      <Footer />
    </>
  );
};

export default App;
