import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import UniqFooter from './components/UniqFooter'
import logo from './assets/react.svg'
import TextComponent from './components/TextComponent'
import Counter from './components/Counter'
import ProductList from './components/ProductList'
import UseFectComp from './components/UseFectComp'
import UseRefComp from './components/UseRefComp'
import Main from './components/usersOrder/Main'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import UserInfo from './pages/UserInfo'
function App() {
  const [count, setCount] = useState(0)
  let headerText = 'Hello text'
  let textInfo = 'Lorem 22222'
  return (
    <>

        <Router>
          <Header></Header>
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>
            <Route path="about" element={<AboutPage></AboutPage>}>
              <Route path="user" element={<UserInfo />} />
            </Route>
            <Route path='/tel' element={<ContactPage></ContactPage>}></Route>
          </Routes>
        </Router>

        {/* <Main></Main>
        <UseRefComp></UseRefComp>
        <UseFectComp></UseFectComp>
        <img src={logo} alt="logo" />
        <ProductList></ProductList>
        <Counter></Counter>
        <TextComponent title={'Hello'} text={'Lorem ipsum'}></TextComponent>
        <TextComponent title={headerText} text={textInfo}></TextComponent>
        <TextComponent></TextComponent>

        <UniqFooter></UniqFooter> */}
        <Footer></Footer>
    </>
  )
}

export default App
