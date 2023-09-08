import trainer  from '../../images/trainer_elias.png'
const Trainer = () => {
  return (
    <section className="trainer">
        <div className="trainer_img">
            <img src={trainer} alt="" />
        </div>

        <div className="trainer_info">
            <h2>¿Qui&eacute;n ser&aacute; mi entrenador?</h2>
            <p>Elias Ortiz,comprometido en <span className='breakpoint'></span> ayudar a la gente a tener una <span className='breakpoint'></span> mejor calidad de vida.
            </p>
            
            <ul className="trainer_data">
                <li>CEO  de Vyper Innova</li>
                <li>Entrenador Personal Certificado por Maxima Fitness</li>
                <li>Ingeniero en Industrial</li>
                <li>M&aacute;s de 5 a &ntilde;os de experiencia en entrenamiento en casa y gimansio</li>
            </ul>

            <p className="trainer_poem">
                "Nuestro verdadero proposito <span className='breakpoint'></span> en esta vida es servir,  y el que no sirve,<span className='breakpoint'></span> no vive de verdad."
            </p>

        </div>

    </section>
  )
}

export default Trainer
