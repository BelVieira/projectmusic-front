import React from 'react';
import 'bootswatch/dist/simplex/bootstrap.css';


import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import UsersTable from '../../components/UsersTable';


class FindMusic extends React.Component {

    state = {
        id: '',
        name: '',
        artist: '',
        duration: ''
    }

    delete = (musicId) => {
        axios.delete(`http://localhost:8080/api/music/${musicId}`)
            .then(response => {
                this.find();
            }
            ).catch(error => {
                console.log(error.response);
            }
            )
    }
    edit = (musicId) => {
        this.props.history.push('/MusicUser')
    }

    find = () => {
        var params = '?';

        if (this.state.id != '') {
            if (params != '?') {
                params = `${params}&`;
            }

            params = `${params}id = ${this.state.id}`;
        }

        if (this.state.name != '') {
            if (params != '?') {
                params = `${params}&`;
            }

            params = `${params}name = ${this.state.name}`;
        }

        if (this.state.email != '') {
            if (params != '?') {
                params = `${params}&`;
            }

            params = `${params}email = ${this.state.email}`;
        }

        axios.get(`http://localhost:8080/api/music${params}`)
            .then(response => {
                const musics = response.data;
                this.setState({ musics });
                console.log(musics)
            }
            ).catch(error => {
                console.log(error.response)
            }

            )
    }
    render() {

        return (
            <Card title="Consultar Música">
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='bs-component'>
                            <FormGroup htmlFor="inputId" label="Id: *">
                                <input type="text"
                                    className="form-control"
                                    id="inputId"
                                    value={this.state.id}
                                    onChange={e => this.setState({ id: e.target.value })}
                                    placeholder="Digite o Id" />
                            </FormGroup>
                            <FormGroup htmlFor="inputName" label="Name: *">
                                <input type="text"
                                    className="form-control"
                                    id="inputName"
                                    value={this.state.name}
                                    onChange={e => this.setState({ name: e.target.value })}
                                    placeholder="Digite o nome" />
                            </FormGroup>
                            <FormGroup htmlFor="inputArtist" label="Artista: *">
                                <input type="text"
                                    className="form-control"
                                    id="inputArtist"
                                    value={this.state.artist}
                                    onChange={e => this.setState({ artist: e.target.value })}
                                    placeholder="Digite o nome do artista" />
                            </FormGroup>

                            <FormGroup htmlFor="inputDuration" label="Duração: *">
                                <input type="text"
                                    className="form-control"
                                    id="inputDuration"
                                    value={this.state.duration}
                                    onChange={e => this.setState({ duration: e.target.value })}
                                    placeholder="Digite a duração da música" />
                            </FormGroup>

                            <br />

                            <button onClick={this.find}
                                type="button"
                                className='btn btn-success'>
                                <i className='pi pi-search'></i> Buscar
                            </button>
                        </div>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='bs-component'>
                            <UsersTable users={this.state.users}
                                delete={this.delete}
                                edit={this.edit} />
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}
export default withRouter(FindMusic);