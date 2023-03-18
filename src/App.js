import Header from './routes/appRouter';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFoundPage from './components/notFounPage';
import AboutMe from './components/dashboardPage';
import ContactMe from './components/contactMe';
import Reviews from './components/reviews'
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <div>
    <Routes>
    <Route path='*' element={<NotFoundPage/>}/>
    <Route path="/" element={<AboutMe title="About me"/>}/>
        <Route path="contactMe" element={<ContactMe title="Contact me"/>}/>
        <Route path="reviews" element={<Reviews title="Reviews"/>} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
