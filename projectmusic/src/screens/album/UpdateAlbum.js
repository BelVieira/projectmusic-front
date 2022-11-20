import React from 'react';
import 'bootswatch/dist/simplex/bootstrap.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';


import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';

class UpdateAlbum extends React.Component {

    state = {
        id: '',
        title: '',
        productionYear: ''
    }

    update = () => {
        axios.put(`http://localhost:8080/api/album/${this.state.id}`,
            {
                title: this.state.title,
                productionYear: this.state.productionYear
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
                <Card title='Atualizar Usuário'>
                <br/>
                <br/>
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
                                <FormGroup label="Título : *" htmlFor='inputtitle'>
                                    <input type="text"
                                        id='inputtitle'
                                        className='form-control'
                                        title='title'
                                        onChange={e => this.setState({ name: e.target.value })} />
                                </FormGroup>
                                <br />
                                <FormGroup label="Ano de Produção: *" htmlFor='inputproductionYear'>
                                    <input type="productionYear"
                                        id='inputproductionYear'
                                        className='form-control'
                                        name='productionYear'
                                        onChange={e => this.setState({ productionYear: e.target.value })} />
                                </FormGroup>
                                <br />
                                <button className='btn btn-success' onClick={this.update} type='button'>Salvar
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default withRouter(UpdateAlbum);