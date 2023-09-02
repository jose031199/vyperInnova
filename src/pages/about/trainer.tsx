import trainer  from '../../images/trainer_certf.png'
const Trainer = () => {
  return (
    <section className="trainer">
        <div className="trainer_img">
            <img src={trainer} alt="" />
        </div>

        <div className="trainer_info">
            <h2>Qui&eacute;n ser&aacute; mi entrenador?</h2>
            <p>Yo, Elias Ortiz, me comprometo  a <span className='breakpoint'></span> estar  a tu lado en todo tu camino fitness
            </p>
            
            <ul className="trainer_data">
                <li>CEO  de Vyper Innova</li>
                <li>Entrenador Personal Certificado</li>
                <li>Ingeniero en Industrial</li>
                <li>Mas de 5 a &ntilde;os de experiencia en entrenamiento en casa y gimansio</li>
                <li>Conocimiento y aplicacion de biomecanica deportiva.</li>
            </ul>

            <p className="trainer_poem">
                "Nuestro verdadero proposito en esta vida es servir, <span className='breakpoint'></span> y el que no sirve, no vive de verdad."
            </p>

        </div>

    </section>
  )
}

export default Trainer
