import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import ButtonClass from './components/ButtonClass';
import Image from './components/Image';
import ImageClass from './components/ImageClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="Cliccami" />
        <ImageClass
          imageSrc="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          altText="foto computer1"
        />
        <Image
          imageSrc="https://images.pexels.com/photos/8524593/pexels-photo-8524593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          altText="foto computer2"
        />
        <ButtonClass label="Cliccami" />
      </header>
    </div>
  );
}

export default App;
