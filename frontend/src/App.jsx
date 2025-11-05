import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LibraryPage from './pages/LibraryPage'
import FavoritePage from './pages/FavoritePage'

function App() {
  return (
    <Routes>

      <Route path="/" element={<MainPage />}>
        
        <Route path="library" element={<LibraryPage />} />
        <Route path="favorite" element={<FavoritePage />} />

      </Route>
      
    </Routes>
  );
}

export default App;