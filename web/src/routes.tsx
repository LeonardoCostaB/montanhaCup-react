import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import { Home } from './pages/home'
import { Event } from './pages/events'
import { Subscription } from './pages/subscription'

export function Routess() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Event />} />
        <Route path="/inscricoes" element={<Subscription />}/>
      </Routes>
    </Router>
  )
}