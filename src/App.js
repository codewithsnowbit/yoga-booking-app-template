import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:slug" exact element={<Form />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
