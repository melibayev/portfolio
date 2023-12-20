import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index'
import HomeP from './pages/Home/HomeP';
import ProjectsP from './pages/Projects/ProjectsP';
import Wrapper from './components/shared/Wrapper'
function App() {
  return (
    <Router>
    <Wrapper />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomeP />} />
          <Route path='projects' element={<ProjectsP />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
