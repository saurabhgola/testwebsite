import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <div className="header">
            <h3>Netlify Production</h3>
            <h1>Hello, welcome to the WEBSITE</h1>
            <h3>Netlify test new build</h3>
            <h3>Netlify create-deployed-test</h3>
            <br />
            <h1>WEBSITE NEW</h1>
            <br />
            <p className="App-intro">
              Current Environment: {process.env.REACT_APP_ENVIORNMENT}
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
