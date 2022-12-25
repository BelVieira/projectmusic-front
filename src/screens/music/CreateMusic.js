import React from 'react'
import 'bootswatch/dist/simplex/bootstrap.css';
import { withRouter } from 'react-router-dom';
import Card from '../../components/Card'
import FormGroup from '../../components/FormGroup'
import axios from 'axios';

class CreateMusic extends React.Component {
    state = {
        name: '',
        artist: '',
        duration: ''
    }
    create = async () => {
        await axios.post('http://localhost:8080/api/music',
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
    cancel = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='container'>
                <Card title="Cadastro de Músicas">
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className="bs-component">
                                <FormGroup label="Nome: *" htmlFor="inputname">
                                    <input type="text"
                                        id="inputname"
                                        className="form-control"
                                        name="name"
                                        onChange={e => this.setState({ artist: e.target.value })} />
                                </FormGroup>
                                <FormGroup label=":Artista *" htmlFor="inputArtist">
                                    <input type="artist"
                                        id="inputArtist"
                                        className="form-control"
                                        name="artist"
                                        onChange={e => this.setState({ artist: e.target.value })} />
                                </FormGroup>
                                <FormGroup label=":Duração *" htmlFor="inputDuration">
                                    <input type="duration"
                                        id="inputDuration"
                                        className="form-control"
                                        name="duration"
                                        onChange={e => this.setState({ artist: e.target.value })} />
                                </FormGroup>
                                <button onClick={this.create} type="button" className="btn btn-success" >
                                    <i className="pi pi-save"></i> Salvar
                                </button>
                                <button onClick={this.cancel} type="button" className="btn btn-danger">
                                    <i className="pi pi-times"></i> Cancelar
                                </button>
                            </div >
                        </div >
                    </div >
                </Card>
            </div >
        );
    }
}

export default withRouter(CreateMusic);