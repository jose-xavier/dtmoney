import { Header } from './components/Header';
import { Container } from './components/Header/styles';
import { GlobalStyle } from './styles/global';
import {Dashboard} from './components/Dashboard'
import Modal from 'react-modal'
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransacitonModalOpen, setNewTransacitonModalOpen] = useState(false);

  function handleOpenNewTransacitonModal() {
      setNewTransacitonModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setNewTransacitonModalOpen(false);
  }

  return (
    <>
     <Header onOpenNewTransactionModal={handleOpenNewTransacitonModal}/>

     <NewTransactionModal 
        isOpen={isNewTransacitonModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}/>

     <Dashboard />

     <GlobalStyle />
    </>
  );
}


