import React from "react";

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import UserApiService from "../../Service/UserApiService";

import { withRouter } from 'react-router-dom';
import{showSuccessMessage, showErrorMessage} from '../../components/Toastr/Toastr';
import { AuthContext } from '../../main/SessionProvider';

class Login extends React.Component {

    state={
        email:'',
        password:''
    }

    constructor(){
        super();
        this.service = new UserApiService();
    }

    login = ()=>{  
        this.context.login(
            this.state.email,
            this.state.password
        ).then(user=>
            {
                if(user){
                    showSuccessMessage(`Usuário ${user.name}, logado!`)
                    this.props.history.push('/FindUser');
                }else{
                    showErrorMessage('Login inválido!')
                }
            }).catch(error =>{
                showErrorMessage('Erro na autenticação:', error);
            })
    }
    create = () => {
        this.props.history.push('/CreateUser');
    }
    render() {
        return (
            <div className='container'>
                <br/>
                <br/>
                <div className='row'>
                    <div className='col-md-6' style={this.styles.colMd6}>
                        <div className='bs-docs-section'>
                            <Card title='Login'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='bs-component'>
                                            <fieldset>
                                                <FormGroup label = 'Email:  *'>
                                                    <input type='email' className='form-control' id='inputEmail'
                                                        area-aria-describedby='emailHelp' placeholder='Digite o email'
                                                        value={this.state.email || ''} onChange={(e) => this.setState({ email: e.target.value })} />
                                                </FormGroup>
                                                <br/>
                                                <FormGroup label = 'Senha:  *'>
                                                    <input type='password' className='form-control' id='inputPassword'
                                                        placeholder='Digite a senha'
                                                        value={this.state.password || ''} onChange={(e) => this.setState({ password: e.target.value })} />
                                                </FormGroup>
                                                <br/>
                                                <button className='btn btn-success' onClick={this.login}>Entrar</button>
                                                <button className='btn btn-danger' onClick={this.create}>Cadastrar</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    styles = {
        colMd6: {
            position: 'relative',
            left: '300px'
        }
    };
}
Login.contextType = AuthContext;
export default withRouter(Login);