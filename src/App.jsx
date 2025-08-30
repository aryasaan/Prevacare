import FeatureShowcase from './components/FeatureShowcase/FeatureShowcase';

function App() {
  return (
    <div className="App">
     
      <div style={{ height: '15vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0f7fa' }}>
        <h1>Welcome to Preva Care!</h1>
      </div>
      <FeatureShowcase />
    </div>
  );
}

export default App;