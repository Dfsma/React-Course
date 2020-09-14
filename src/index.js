import React from 'react'
import ReactDom from 'react-dom'

const TarjetaFruta = (props) => (
  <div>
    <h3> { props.name } </h3>
    <hr/>
    <p>$ {props.price } </p>
  </div>
)

const App = () => (
  <div>
  
    <TarjetaFruta name='Sandia' price={1.560} ></TarjetaFruta>
    <TarjetaFruta name='Melon' price={1.990}></TarjetaFruta>
    <TarjetaFruta name='Guacamole' price={2.560}></TarjetaFruta>
  </div>
)

ReactDom.render(<App />, document.getElementById('root'));