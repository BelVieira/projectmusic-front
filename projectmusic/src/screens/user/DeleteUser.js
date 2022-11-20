import React from 'react';
import 'bootswatch/dist/simplex/bootstrap.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';


class DeleteUser extends React.Component {
    state = {
        id: 0,
    }

    delete = async () => {
        await axios.delete(`http://localhost:8080/api/user/${this.state.id}`
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
                <Card title="Deletar">
                <br/>
                <br/>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='bs-component'>
                                <FormGroup label="ID: *" htmlFor='inputid'>
                                    <input type="text"
                                        id='inputid'
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

export default withRouter(DeleteUser);