import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './components/Update';
import Create from './components/Create';
import Read from './components/Read';

function App() {
 
  return (
    <div className="App">
      <h1>CRUD</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path={'/create'} element={<Create />}/>
          <Route exact path={'/read'} element={<Read />} />
          <Route exact path={'/update'} element={<Update />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
