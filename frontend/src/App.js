import { Routes, Route } from "react-router-dom"
// import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";


const App = () => {
  return (
    <>
    <Header />
    <main className="py-3">
        <Routes>
        <Route index={true} path="/" element={<HomeScreen/>}/>
        <Route path='/product/:id' element={<ProductScreen/>}/>
        </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App