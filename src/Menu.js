import React from 'react';

// importar componentes 
import Seach from './Seach';

//importar estilos
import './Menu.css';

function Menu(props){
    return(
        <div className="container">
            <div className="subcontainer">
                <div className="logo">
                    {props.title}
                </div>

                <div className="search">
                    <Seach></Seach>
                </div>

                <div className="accions">
                    <button className="button btn-blue">Add book</button>
                </div>
            </div>

        </div>
    );
}

export default Menu;