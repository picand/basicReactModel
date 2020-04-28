import React from 'react';
import './Prueba1.css';

class Prueba1 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state={
            nombre:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e, submitForm) {
        e.preventDefault();
        this.setState({ nombre: '' });
    }
    handleChange(e) {
        this.setState({ nombre: e.target.nombre });
    }
    render() {
        return <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" id='nombre' value={this.state.nombre} onChange={this.handleChange} required />
                <button className="Form__button" type="submit">
                                        Enviar
                                    </button>
            </form>

        </div>
    }
}

export default Prueba1;