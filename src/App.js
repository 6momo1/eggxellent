import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Content from './components/Content';


function App() {
  return (
    <div className='content-center'>
      <Navbar></Navbar>
    <Hero></Hero>
    <Content/>
    </div>
  );
}

export default App;
