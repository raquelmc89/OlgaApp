import Header from './components/header';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFoundPage from './components/notFounPage';
import AboutMe from './components/dashboardPage';
import ContactMe from './components/contactMe';
import Reviews from './components/reviews'
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Routes>
    <Route path='*' element={<NotFoundPage/>}/>
    <Route path="/" element={<AboutMe/>}/>
        <Route path="contactMe" element={<ContactMe/>}/>
        <Route path="reviews" element={<Reviews/>} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
