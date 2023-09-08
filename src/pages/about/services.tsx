 import training from '../../images/training.jpg'
import healthy from '../../images/healthy_food.jpg'
import exercise from '../../images/exercise_tech.jpg'
import collection from '../../images/collection.jpg'
import google from '../../images/google.png'
import social from '../../images/social_media.jpg'



const Services = () => {
  return (
    <section className="services">
       <h2>¿Qu&eacute; servicios ofrecemos?</h2>
        <div className="service">
            <div className="service_card">
            <img src={training} alt="" />
                <div className='service_text'>
                <p className=''>Rutina de Entranamiento en casa y gimnasio</p> 
                </div>

            </div>

            <div className="service_card">
            <img src={healthy} alt="" />
                <div className='service_text'>
                <p className=''>Estrategias para mejorar tu alimentacion</p> 
                </div>   
            </div>
        
            <div className="service_card">
            <img src={exercise} alt="" />
            <div className='service_text'>
                <p className=''>Asesoramiento para mejorar la tecnica de tus ejercicios</p> 
            </div>
            </div>
       
   
            <div className="service_card">
            <img src={collection} alt="" />
                <div className='service_text'>
                    <p className=''>Coleccion de ejercicios en gimnasio y casa</p> 
                </div>
            </div>

            <div className="service_card">
            <img src={google} alt="" />
                <div className='service_text'>
                    <p className=''>Revisiones por videollamada de manera periodica</p>
                </div>
            </div>
    
            <div className="service_card">
            <img src={social} alt="" />

             <div className='service_text'>
                <p className=''>Comunicacion 1 a 1 por redes</p>
            </div>   
            </div>
        </div> 
       
    </section>
  )
}

export default Services
