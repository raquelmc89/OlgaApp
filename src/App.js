import Header from './routes/appRouter';
import { useState } from 'react';
import i18n from './i18n';
import { Suspense } from 'react';
import {useTranslation} from 'react-i18next'
import Loading from './components/loading';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFoundPage from './components/notFounPage';
import AboutMe from './components/dashboardPage';
import ContactMe from './components/contactMe';
import Reviews from './components/reviews';
import LocaleContext from './LocaleContext';



const App = () => {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));
  return (
    <BrowserRouter>
    <LocaleContext.Provider value={{locale, setLocale}}>
   <Suspense fallback={<Loading/>}>
    <Header/>
    <div>
    <Routes>
    <Route path='*' element={<NotFoundPage/>}/>
        <Route path="/" element={<AboutMe title="About me"/>}/>
        <Route path="contactMe" element={<ContactMe title="Contact me"/>}/>
        <Route path="reviews" element={<Reviews title="Reviews"/>}/>
    </Routes>
    </div>
   </Suspense>
   </LocaleContext.Provider>
    </BrowserRouter>
  )
}

export default App;
