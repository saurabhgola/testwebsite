import './App.css';

function App() {
  return (
  <>
    <div className="App">
      <h1>NEW-WEBSITE</h1>
      <h2>Welcome</h2>
      <h2>New test branch</h2>
      <h3>Netlify Test west</h3>
      <h3>Netlify Test</h3>

      <br/>
      <p className="App-intro">Current Enviornment: {process.env.REACT_APP_ENVIORNMENT}</p>
    </div>
  </>
  );
}

export default App;
