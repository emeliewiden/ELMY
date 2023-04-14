import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import About from './components/About.tsx'
import BookingPage from './pages/BookingPage'
import { UserContext } from './pages/UserContext'
import ProductId from './pages/ProductId'

function App() {
    return (
        <div className="App">
            <NavBar />
            {/* //UserContext.Provider: detta värdet kan skickas till alla mina paths nedanför, för att kunna använda infon på alla sidorna måste man använda funktionen på AboutPage*/}
            <UserContext.Provider
                className="UsecontextStyle"
                value={'CONTACT US'}
            >
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/menu" element={<MenuPage />}></Route>
                    <Route path="/booking" element={<BookingPage />}></Route>
                    <Route
                        path="/about"
                        element={<About name={'+46 xx xxx xx xx'} />} // här skriver man in propsen till typescript (About.tsx)
                    ></Route>
                    <Route path="/products/:id" element={<ProductId />}></Route>
                </Routes>
            </UserContext.Provider>
        </div>
    )
}

export default App
