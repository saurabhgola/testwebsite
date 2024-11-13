import './App.css';

function App() {
  return (
  <>
    <div className="App">
      <h1>NEW-WEBSITE</h1>
      <h2>Welcome</h2>
      <h2>New test branch</h2>
     <h3>Netlify Production</h3>
     <h2>New site is create</h2>
      <br/>
      <p className="App-intro">Current Enviornment: {process.env.REACT_APP_ENVIORNMENT}</p>
 <br/>
    </div>
  </>
  );
}

export default App;
