import LinkBtn from './components/LinkBtn.jsx';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <LinkBtn text="ahahahha" link="https://fontawesome.com/v5/docs/web/use-with/react" icon={faCoffee}></LinkBtn>
    </div>
  );
}

export default App;
