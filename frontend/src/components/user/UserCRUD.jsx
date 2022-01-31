import React, {Component} from "react";
import Main from "../template/Main";

const headerProps ={
    icon: 'users',
    title: "Usuários",
    subtitle: 'Cadastro de usuários: Incluir, Alterar, Listar e Excluir'
}

export default class UserCrud extends Component{
    render(){
        return (
            < Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}