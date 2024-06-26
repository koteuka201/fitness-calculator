import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter  } from 'react-router-dom'
import { Router } from './components/router/router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Router/>
  </BrowserRouter>,
)
