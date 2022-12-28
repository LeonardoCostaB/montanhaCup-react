import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/home'
import { Event } from './pages/events'
import { Subscription } from './pages/subscription'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/eventos" element={ <Event /> } />
      <Route path="/inscricoes" element={ <Subscription /> } />
      <Route path="*" element={ <Home /> } />
    </Routes>
  )
}