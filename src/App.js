import './App.css';

function App() {
  return (
  <>
    <div className="App">
     <h3>Netlify Production</h3>
     <h1>WEBSITE NEW</h1>
     <h3>netlify test new build</h3>
      <br/>
      <p className="App-intro">Current Enviornment: {process.env.REACT_APP_ENVIORNMENT}</p>
 <br/>
    </div>
  </>
  );
}

export default App;
