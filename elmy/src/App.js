import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import AboutPage from './pages/AboutPage'
import BookingPage from './pages/BookingPage'

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/menu" element={<MenuPage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
            </Routes>
        </div>
    )
}

export default App
