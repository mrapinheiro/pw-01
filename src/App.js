import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
