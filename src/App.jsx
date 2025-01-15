import './App.css'
import Header from "./components/header/Header.jsx";
import About from "./components/about/About.jsx";
import Request from "./components/request/Request.jsx";
import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Question from "./components/question/Question.jsx";
import Partners from "./components/partners/Partners.jsx";
import Reviews from "./components/reviews/Reviews.jsx";
import Contacts from "./components/contacts/Contacts.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {

  return (
    <>
        <Header />
        <About />
        <Request
            text_h4={'Самые умные проекты'}
            text_h5={'Реализуем самые смелые решения в россии!'}
            inlineStyle={{letterSpacing: '0.02em'}}
        />
        <Services />
        <Portfolio />
        <Question />
        <Partners />
        <Reviews />
        <Request
            text_h4={'Хотите с нами работать?'}
            text_h5={'Оставьте заявку и мы свяжемся с Вами!'}
            inlineStyle={{letterSpacing: '0.026em'}}
        />
        <Contacts />
        <Footer />
    </>
  )
}

export default App
