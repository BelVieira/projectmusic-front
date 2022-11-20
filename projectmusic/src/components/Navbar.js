import React from 'react'
import NavbarItem from './NavbarItem'
import 'bootswatch/dist/simplex/bootstrap.css';

function Navbar(props) {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="/" className="navbar-brand"> Usuário </a>
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                        <br/>
                    <span className="navbar-toggler-icon"></span>
                </button>
        

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                        <li class="divider"></li>
                        <li><a href="#">One more separated link</a></li>
                        
                    </ul>
                </li>
                

                <div className="collapse navbar-collapse" id="navbarResponsive">
                <br/>
                
                    <ul className="navbar-nav">
                        <NavbarItem href="/" label="Home" />
                        <NavbarItem href="/login" label="Login" />
                        <NavbarItem href="/CreateUser" label="Cadastrar usuário" />
                        <NavbarItem href="/DeleteUser" label="Deletar usuário" />
                        <NavbarItem href="/FindUser" label="Buscar usuário" />
                        <NavbarItem href="/UpdateUser" label="Atualizar usuário" />
                        <NavbarItem href="/CreateAlbum" label="Adicionar album" />
                        <NavbarItem href="/DeleteAlbum" label="Deletar album" />
                        <NavbarItem href="/UpdateAlbum" label="Atualizar album" />
                        <NavbarItem href="/FindAlbum" label="Buscar album" />
                        
                    </ul>
                </div>
            </div>
        </div>
    )   
}
export default Navbar;
