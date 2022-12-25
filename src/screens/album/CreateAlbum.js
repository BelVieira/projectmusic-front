import React from 'react';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/Card'
import FormGroup from '../../components/FormGroup'

class CreateAlbum extends React.Component {

    state = {
        id: "",
        title: "",
        productionYear: "",
        musics:[],
        returnAlbum: ""
    }

    create = async () => {
        await axios.post('http://localhost:8080/api/album',
            {
                title: this.state.title,
                productionYear: this.state.productionYear,
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

    add = () => {
        const returnAlbum = "ID: " + this.state.id + " Album: " + this.state.title + " Música: " + this.state.musics;
        this.setState({ returnAlbum })
    }

    render() {
        return (
            <div className='container'>
                <Card title="Adicionar Album">
                    <br />
                    <br />
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className="bs-component">
                                <FormGroup label="Título: *" htmlFor="inputname">
                                    <input type="text"
                                        id="inputtitulo"
                                        className="form-control"
                                        name="titulo"
                                        onChange={e => this.setState({ title: e.target.value })} />
                                </FormGroup>
                                <FormGroup label="Ano de produção: *" htmlFor="inputProductionYear">
                                    <input type="productionYear"
                                        id="inputproductionYear"
                                        className="form-control"
                                        name="productionYear"
                                        onChange={e => this.setState({ productionYear: e.target.value })} />
                                </FormGroup>
                                <h4> Insira a música </h4>
                                <FormGroup label="Nome: *" htmlFor="inputName">
                                    <input type="name"
                                        id="inputName"
                                        className="form-control"
                                        name="name"
                                        onChange={e => this.setState({ name: e.target.value })} />
                                </FormGroup>
                                <FormGroup label="Artista: *" htmlFor="inpuArtist">
                                    <input type="artist"
                                        id="inputArtist"
                                        className="form-control"
                                        name="artist"
                                        onChange={e => this.setState({ artista: e.target.value })} />
                                </FormGroup>
                                <FormGroup label="Duração: *" htmlFor="inpuDuration">
                                    <input type="duration"
                                        id="inputDuration"
                                        className="form-control"
                                        name="duration"
                                        onChange={e => this.setState({ duration: e.target.value })} />
                                </FormGroup>

                                <button type="button" className="btn btn-dark" onClick={this.add}>Adicionar
                                </button>
                                <br />
                                <br />
                                <h6> {this.state.returnAlbum} </h6>
                            </div >
                        </div >
                    </div >
                </Card>
            </div>
        );
    }
}
export default withRouter(CreateAlbum);