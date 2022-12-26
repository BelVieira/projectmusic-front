import React from 'react'

import { withRouter } from 'react-router-dom';
import axios from 'axios';


import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';

class CreateUser extends React.Component {

    state = {
        id: '',
        name: '',
        email: '',
        password: '',
    }

    create = () => {
        axios.post('http://localhost:8080/api/user',
            {
                id: this.state.id,
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
        ).then(response => {
            console.log(response);
        }
        ).catch(error => {
            console.log(error.response);
        }
        )
    }

    cancel = () => {
        this.props.history.push('/');
    }


    render() {
        return (
            <div className='container'>
                <br />
                <br />
                <Card title='Cadastro de Usuário'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='bs-component'>
                                <FormGroup label="Nome: *" htmlFor='inputname'>
                                    <input type="text"
                                        id='inputname'
                                        className='form-control'
                                        name='name'
                                        onChange={e => this.setState({ name: e.target.value })} />
                                </FormGroup>
                                <br />
                                <FormGroup label="Email: *" htmlFor='inputemail'>
                                    <input type="email"
                                        id='inputemail'
                                        className='form-control'
                                        name='email'
                                        onChange={e => this.setState({ email: e.target.value })} />
                                </FormGroup>
                                <br />
                                <FormGroup label="Senha: *" htmlFor='inputpassword'>
                                    <input type="password"
                                        id='inputpassword'
                                        className='form-control'
                                        name='password'
                                        onChange={e => this.setState({ password: e.target.value })} />
                                </FormGroup>
                                <br />
                                <FormGroup label="Repita a Senha: *" htmlFor='inputPasswordRepeat'>
                                    <input type="password"
                                        id='inputPasswordRepeat'
                                        className='form-control'
                                        name='password'
                                        onChange={e => this.setState({ passwordRepeat: e.target.value })} />
                                </FormGroup>
                                <br />
                                <button className='btn btn-success' onClick={this.create} type='button'>Salvar
                                </button>
                                <button className='btn btn-danger' onClick={this.cancel} type='button'>Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}


export default withRouter(CreateUser);