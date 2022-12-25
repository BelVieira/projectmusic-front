import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const rows = props.users.map( user => {
        return(
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button type="button" title="Editar"
                    className="btn btn-primary"
                    onClick={e => props.edit(user.id)}>
                        <i className="pi pi-pencil"></i>
                    </button>
                    <button type="button" title="Excluir"
                    className="btn btn-danger"
                    onClick={e => props.delete(user.id)}>
                        <i className="pi pi-trash"></i>
                    </button>
                </td>
            </tr>
        )
     }
    )
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Açoes</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
};

