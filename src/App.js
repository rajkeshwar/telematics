import {
  BrowserRouter, Route, Switch
} from "react-router-dom";
import './App.css';
import ConsentPage from './ConsentPage';
import MagicLinkPage from './MagicLinkPage';

function App() {
  return (
    <div className="bg-gray-300 py-4 min-h-screen">
      <div className="container mx-auto px-4 bg-white py-4 text-gray-600">
        <BrowserRouter>
          <Switch>
            <Route path="/magiclink" component={MagicLinkPage} />
            <Route path="/" component={ConsentPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
