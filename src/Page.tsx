import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App'
import Blog from './components/Blog/Blog'

const Page = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default Page
