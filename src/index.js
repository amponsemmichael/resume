
import {render} from 'react-dom';
import { 
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import App from './App';
import About from './pages/about'
import Resume from './pages/resume';

const rootElement =  document.getElementById('root')
render(
<BrowserRouter>
<Routes>
    <Route path="/" element={<App />} /> {""}
<Route path="about" element={<About />} /> {""}
<Route path="resume" element={<Resume />} /> {""}

</Routes>
</BrowserRouter>,
   rootElement
)