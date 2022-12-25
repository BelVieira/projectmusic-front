import React from 'react';
import 'bootswatch/dist/simplex/bootstrap.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';


import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';

class UpdateMusic extends React.Component {

    state = {
        id: 0,
        name: '',
        artist: '',
        duration: ''
    }

    update = () => {
        axios.put(`http://localhost:8080/api/music/${this.state.id}`,
            {
                name: this.state.name,
                artist: this.state.artist,
                duration: this.state.duration
            }
        ).then(response => {
            console.log(response);
        }
        ).catch(error => {
            console.log(error.response);
        }
        );
    }

    render() {
        return (
            <div className='container'>
                <Card title='Atualizar Música'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='bs-component'>
                                <FormGroup label="Id: *" htmlFor='inputId'>
                                    <input type="text"
                                        id='inputId'
                                        className='form-control'
                                        name='Id'
                                        onChange={e => this.setState({ id: e.target.value })} />
                                </FormGroup>
                                <br />
                                <FormGroup label="Nome: *" htmlFor='inputname'>
                                    <input type="text"
                                        id='inputname'
                                        className='form-control'
                                        name='name'
                                        onChange={e => this.setState({ name: e.target.value })} />
                                </FormGroup>
                                <br />
                                <FormGroup label="Artista: *" htmlFor='inputartist'>
                                    <input type="artist"
                                        id='inputartist'
                                        className='form-control'
                                        name='artist'
                                        onChange={e => this.setState({ artist: e.target.value })} />
                                </FormGroup>
                                <br />
                                <FormGroup label="Duração: *" htmlFor='inputduration'>
                                    <input type="duration"
                                        id='inputduration'
                                        className='form-control'
                                        name='duration'
                                        onChange={e => this.setState({ duration: e.target.value })} />
                                </FormGroup>
                                <br />
                                <button className='btn btn-sucess' onClick={this.update} type='button'>Salvar
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}
export default withRouter(UpdateMusic);