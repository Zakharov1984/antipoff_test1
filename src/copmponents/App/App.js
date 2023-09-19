import { BrowserRouter as Router} from 'react-router-dom';

import { AppRouter } from '../UI/AppRouter/AppRouter';

import './App.scss';


function App() {
  return (
    <Router>
      <AppRouter/>
    </Router>
  );
}

export default App;
