import './App.css';
import Content from './components/cardContent';
import Header from './components/Header';

function App() {
  return (
    <div className="App bg-light" style={{height:'120vh'}}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
