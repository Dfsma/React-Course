import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class PortalModal extends Component {
  
  render () {

    if(!this.props.visible){
      return null
    }

    const styles = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      background: 'linear-gradient(to top right, #667eea, #764ba2',
      opacity: '0.95',
      color: '#fff'

    }
    return ReactDOM.createPortal((
      <div style={styles}>
        { this.props.children }
      </div>
    ), document.getElementById('modal-root'))
  }

}


class App extends Component {

  state = {
    visible: false,
    num: 0
  }

  componentDidMount () {
    setInterval(() => {
      this.setState(state => ({
        num: state.num + 1
      }))
    }, 1000)
  }

  mostrar = () => {
    this.setState({ visible: true})
  }
  cerrar = () => {
    this.setState({ visible: false})
  }

  render () {
    
    return (
      <div>
        <button onClick={this.mostrar}>
          Mostrar
        </button>
        <PortalModal visible = {this.state.visible}>
          <button onClick={this.cerrar}>
            Cerrar
          </button>
          Hola desde portal Modal {this.state.num}
        </PortalModal>
      </div>
    )
  }
}

export default App
