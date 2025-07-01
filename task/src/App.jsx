
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import { Home } from './pages/Home';
import { NotImplemented } from './pages/NotImplemented';
import { Resources } from './components/Resources';

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index element={<Home/>}></Route>
            <Route path="/resources" element={<Resources />} />

      <Route path="/not-implemented" element={<NotImplemented />} />

     </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
