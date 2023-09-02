
const Prices = () => {
  return (
    <section className="prices">
        <h2>Precios</h2>
        <div className="prices_card">
          <div className="price_card">
              <h3>Servicios y Horarios</h3>
              
              <ul>
                <li>Sesion Individual: <span>$149</span></li>
                <li>Sesion en parejas:<span>$249</span> </li>
                <li>Semana Regular:  <span>$399</span></li>
                <li>Semana Estudiantes: <span>$199</span></li>
                <li>Semana Egresados: <span>$299</span></li>
                <li>Lunes a Viernes: <span>12PM-8 PM</span></li>
                <li>Sabado: <span>8AM-12PM</span></li>

              </ul>
          </div>
            <div className="price_card">
              <h3>Estudiantes</h3>
              <span>$199/mes</span>
              <button type="reset">Conoce m&aacute;s</button>
          </div>
          <div className="price_card">
              <h3>Externos</h3>
              <span>$249/mes</span>
              <button type="reset">Conoce m&aacute;s</button>
          </div>
        </div>

    </section>
  )
}

export default Prices
