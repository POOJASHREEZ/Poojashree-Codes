
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Nav from './components/Nav'
import Menu from './components/Menu'
import Signup from './components/Signup'
// import PageNotFound from './components/PageNotFound'
import './components/global.css'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App(){
    return(
        <>
        <ToastContainer/>
        <Router>
           <Nav />
         
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/menu" element={<Menu/>} />
                {/* <Route path="*" element={<PageNotFound/>} /> */}
            </Routes>

        </Router>
        </>
    )
}
export default App