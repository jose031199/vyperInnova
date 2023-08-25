import training from '../../images/training.jpg'
import healthy from '../../images/healthy_food.jpg'
import exercise from '../../images/exercise_tech.jpg'
import collection from '../../images/collection.jpg'
import google from '../../images/google.png'
import social from '../../images/social_media.jpg'



const Services = () => {
  return (
    <section className="services">
       <h2>Que servicios ofrecemos?</h2>
        <div className="service">
            <div className="service_card">
                <div className='service_text'>
                <p className=''>Rutina de Entranamiento en casa y gimnasio</p> 
                </div>
                <img src={training} alt="" />
            </div>

            <div className="service_card">
                <div className='service_text'>
                <p className=''>Estrategias para mejorar tu alimentacion</p> 
                </div>   
                <img src={healthy} alt="" />
            </div>
        
            <div className="service_card">
                <p className='service_text'>Asesoramiento para mejorar la tecnica de tus ejercicios</p> 
                <img src={exercise} alt="" />
            </div>
       
   
            <div className="service_card">
                <p className='service_text'>Coleccion de ejercicios en gimnasio y casa</p> 
                <img src={collection} alt="" />
            </div>

            <div className="service_card">
                <p className='service_text'>Revisiones por videollamada de manera periodica</p>
                <img src={google} alt="" />
            </div>
    
            <div className="service_card">
                <p className='service_text'>Comunicacion 1 a 1 por redes</p>
                <img src={social} alt="" />
            </div>
        </div> 
       
    </section>
  )
}

export default Services
