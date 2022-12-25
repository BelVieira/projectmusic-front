import React from 'react';
import 'bootswatch/dist/simplex/bootstrap.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';


class DeleteMusic extends React.Component {
    state = {
        id: 0,
    }

    delete = () => {
        axios.delete(`http://localhost:8080/api/music${this.state.id}`
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
                <Card title='Deletar Música'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='bs-component'>
                                <FormGroup label="Id: *" htmlFor='inputId'>
                                    <input type="text"
                                        id='inputId'
                                        className='form-control'
                                        name='name'
                                        onChange={e => this.setState({ id: e.target.value })} />
                                </FormGroup>
                                <br />
                                <button className='btn btn-danger   ' onClick={this.delete} type='button'>Deletar
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default withRouter(DeleteMusic);