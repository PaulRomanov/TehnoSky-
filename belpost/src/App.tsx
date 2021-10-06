import './styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import PagesAll from './pages/PagesAll/PagesAll';

export const App = () => {
  return (
    <Router>
      <div className="app">
        <PagesAll />
      </div>
    </Router>
  );
};

export default App;
