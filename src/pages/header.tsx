import 'animate.css'
import logo from '../images/logo.png'
import '../index.css'
import Menu from './menu/menu'
const Header = () => {
  return (
        <header className='banner'>
            <div className='banner_img'>
                <img className='animate__animated animate__fadeInDown' src={logo} alt="Logo" />
            </div>
            <div className='animate__fadeInDown banner_title'>
               <Menu/>
               <div className='title'>
               <h1>VYPER INNOVA</h1>
                <p>"Empieza <span className=''>hoy</span> mismo ,el<span className='breakpoint'></span> <span className=''>ma&ntilde;ana</span> no esta garantizado"</p>
               </div>
            </div>
        </header>   
  )
}

export default Header
