import { Header } from './components/Header';
import { Container } from './components/Header/styles';
import { GlobalStyle } from './styles/global';
import {Dashboard} from './components/Dashboard'

export function App() {
  return (
    <>
     <GlobalStyle />
     <Header />
     <Dashboard />
    </>
  );
}


