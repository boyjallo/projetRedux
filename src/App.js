
import './App.css';
import './Components/AjouterUneTache';
import AjouterUneTache from './Components/AjouterUneTache';
import './Components/ListTask';
import TaskList from './Components/ListTask';
import './Components/Tache';
import Tache from './Components/Tache';
function App() {
  return (
    <div className="App"> 
<AjouterUneTache/>
<TaskList/>
<Tache/>
    </div>
  );
}

export default App;
