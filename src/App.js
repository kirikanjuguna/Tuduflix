import './App.css';

const App = () => {
  const name = 'Edwin';
  const isNameShowing = true;
  return (
    <div className="App">
      <h1>Guten Abend, {isNameShowing ? name : 'someone'}!</h1>
    </div>
  );
}

export default App;
