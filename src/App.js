//Components
import FirstComponent from './components/FirstComponents';
import TemplateExpression from './components/TemplateExpressions';


//Styles CSS
import './App.css';
import Events from './components/Events';


function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <Events/>
    </div>
  );
}

export default App;
