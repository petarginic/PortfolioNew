import { Navbar, Home, About, Skills, Contact, Footer } from './components'

const App = () => {
    return (
        <div className="bg">
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
