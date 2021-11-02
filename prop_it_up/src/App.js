import './App.css';
import PersonCard from './components/PropItUp';

function App() {
  return (
    <div className="App">
      <PersonCard firstName= "Jane" lastName= "Doe" age= "45" hairColor= "Black" ></PersonCard>
      <PersonCard firstName= "John" lastName= "Smith" age= "88" hairColor= "Brown" ></PersonCard>
      <PersonCard firstName= "Maria" lastName= "Smith" age= "62" hairColor= "Brown" ></PersonCard>
    </div>
  );
}

export default App;
