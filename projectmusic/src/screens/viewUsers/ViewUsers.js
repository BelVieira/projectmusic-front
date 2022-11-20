import React from 'react';
import './ViewUsers.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

class ViewUsers extends React.Componnet {
    state = {
        name: '',
        email: '',
        id: '',
        users: []
    }
    delete = (userId) => {
        axios.delete(`http://localhost:8080/api/user/${userId}`
        ).then(response => {
            this.find();
        }
        ).catch(error => {
            console.log(error.response);
        }
        );
    }
    edit = (userId) => {
        this.props.history.push('/updateUser');
    }
    find = () => {
        var params = '?';
        if (this.state.id != '') {
            if (params != '?') {
                params = `${params}&`;
            }
            params = `${params}id=${this.state.name}`;
        }
        if (this.state.email != '') {
            if (params != '?') {
                params = `${params}&`;
            }
            params = `${params}email=${this.state.email}`;
        }
    }
}
export default withRouter(ViewUsers);