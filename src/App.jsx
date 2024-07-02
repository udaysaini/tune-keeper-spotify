import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="p-8">
          <AppRoutes />
        </main>
      </Router>
    </>
  )
}

export default App;
