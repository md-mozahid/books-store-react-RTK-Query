import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Books from './components/Books'
import Navbar from './components/Navbar'
import Layout from './layout/Layout'
import AddBook from './pages/AddBook'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/add-book" element={<AddBook />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
