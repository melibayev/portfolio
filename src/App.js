import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index'
import HomeP from './pages/Home/HomeP';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomeP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
