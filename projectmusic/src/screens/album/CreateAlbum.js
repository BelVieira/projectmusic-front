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
        const returnAlbum = "ID: " + this.state.id + " Album: " + this.state.title;
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
                                        onChange={e => this.setState({ eproductionYear: e.target.value })} />
                                </FormGroup>
                                <button type="button" class="btn btn-dark" onClick={this.add}>Adicionar
                                </button>
                                <br />
                                <br />
                                <h6>Album Adicionado: {this.state.returnAlbum} </h6>
                            </div >
                        </div >
                    </div >
                </Card>
            </div>
        );
    }
}
export default withRouter(CreateAlbum);