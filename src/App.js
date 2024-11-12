import './App.css';

function App() {
  return (
  <>
    <div className="App">
      <h1>NEW-WEBSITE</h1>
      <h2>Hello</h2>
      <br/>
      <p className="App-intro">Current Enviornment: {process.env.REACT_APP_ENVIORNMENT}</p>
    </div>
  </>
  );
}

export default App;
