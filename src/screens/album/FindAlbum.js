import React from 'react';
import 'bootswatch/dist/simplex/bootstrap.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import UsersTable from '../../components/UsersTable';


class FindAlbum extends React.Component {

    state = {
        id: '',
        title: '',
        productionYear: ''
    }

    delete = (userId) => {
        axios.delete(`http://localhost:8080/api/album/${userId}`)
            .then(response => {
                this.find();
            }
            ).catch(error => {
                console.log(error.response);
            }
            )
    }
    edit = (userId) => {
        this.props.history.push('/UpdateAlbum')
    }

    find = () => {
        var params = '?';

        if (this.state.id != '') {
            if (params != '?') {
                params = `${params}&`;
            }

            params = `${params}id = ${this.state.id}`;
        }

        if (this.state.title != '') {
            if (params != '?') {
                params = `${params}&`;
            }

            params = `${params}name = ${this.state.title}`;
        }

        if (this.state.productionYear != '') {
            if (params != '?') {
                params = `${params}&`;
            }

            params = `${params}email = ${this.state.productionYear}`;
        }

        axios.get(`http://localhost:8080/api/album${params}`)
            .then(response => {
                const users = response.data;
                this.setState({ users });
                console.log(users)
            }
            ).catch(error => {
                console.log(error.response)
            }

            )
    }
    render() {

        return (
            <Card title="Consultar Usuário">
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
                            <FormGroup htmlFor="inputTitle" label="Título: *">
                                <input type="text"
                                    className="form-control"
                                    id="inputTitle"
                                    value={this.state.title}
                                    onChange={e => this.setState({ name: e.target.value })}
                                    placeholder="Digite o título" />
                            </FormGroup>
                            <FormGroup htmlFor="inputProductionYear" label="Ano de Produção: *">
                                <input type="text"
                                    className="form-control"
                                    id="inputProductionYear"
                                    value={this.state.productionYear}
                                    onChange={e => this.setState({ productionYear: e.target.value })}
                                    placeholder="Digite o ano de produção" />
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
export default withRouter(FindAlbum);