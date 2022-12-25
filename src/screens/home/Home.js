import React from "react";

import Card from "../../components/Card";

export default class Home extends React.Component {

    getLoggedUser = () => {
        var value = localStorage.getItem('loggedUser');
        var user = JSON.parse(value);

        return user;
    }

    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <Card title = "DAC - Sistema Repositório de Músicas">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <label>Projeto criado para a disciplina DAC - IFPB - Campus Monteiro </label>
                                <br/>
                                <label>Izabel Vieira - izabel.carneiro@academico.ifpb.edu.br </label>
                                <br/>
                                <label>Usuário logado: { this.getLoggedUser().name }</label>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}