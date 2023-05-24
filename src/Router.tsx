import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Posts } from './pages/Posts'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/posts/:numberPost" element={<Posts />} />
    </Routes>
  )
}
