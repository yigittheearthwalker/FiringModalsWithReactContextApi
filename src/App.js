import React, {Fragment} from 'react';
import './App.css';
import ModalState from './context/modal/ModalState'
import Header from './components/layout/Header'
import Home from './components/pages/Home'
import Modal from './components/layout/Modal'


function App() {
  return (
    <ModalState>
      <Fragment>
          <Modal />
          <div className="app">
            <Header />
            <Home />
          </div>
      </Fragment>
    </ModalState>
  );
}

export default App;
