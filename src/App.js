import './App.css';

function App() {
  return (
  <>
    <div className="App">
      <h1>NEW-WEBSITE</h1>
      <a href="https://reactjs.org">Learn React</a>  {/* Add the link if necessary */}
      <br/>
      <p className="App-intro">Current Enviornment: {process.env.REACT_APP_ENVIORNMENT}</p>
    </div>
  </>
  );
}

export default App;
