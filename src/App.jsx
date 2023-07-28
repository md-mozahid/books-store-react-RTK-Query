import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from './app/store'
import Books from './components/Books'
import Navbar from './components/Navbar'
import Layout from './layout/Layout'
import AddBook from './pages/AddBook'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/add-book" element={<AddBook />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
