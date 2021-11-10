
import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Test></Test>
      <Countries></Countries>

    </div>
  );
}

export default App;


function Test() {
  return (
    <div className="test">
      <h1> This is a Pracktice Component</h1>

    </div>
  )
}
