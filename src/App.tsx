import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MainLayout from './components/layout/MainLayout';
import Authentication from './pages/Authentication';
import Homepage from "./pages/Homepage"

function App() {
  return (
    <Router>
      <MainLayout>
          <Routes>
              <Route element={<Homepage />} path='/' />
              <Route element={<Authentication />} path='/auth' />
          </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
