import 'animate.css'
import logo from '../images/logo.jpg'

const header = () => {
  return (
    <header>
        <div className='banner'>
            <div className='banner_img'>
                <img src={logo} alt="logo_innova" />
            </div>
            <div className='banner_title'>
                <h1>VYPER INNOVA</h1>
                <p>"Empieza <span>hoy</span> mismo,el <span>ma&ntilde;ana</span> no esta garantizado"</p>
            </div>
        </div>   
    </header>
  )
}

export default header
