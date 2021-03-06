import React from 'react';

// importar componentes 
import Search from './Search';
import PanelAdd from './PanelAdd';

//importar estilos
import './Menu.css';

class Menu extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            newItemPanel: false
        };
    }

    addBook = () => {

        this.setState({
            newItemPanel:true
        })
    }

    onCancel = (e) => {
        
        this.setState({
            newItemPanel:false
        })
    }

    render(){
        return(
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">
                        {this.props.title}
                    </div>
    
                    <div className="search">
                         <Search onsearch ={this.props.onsearch} />  
                    </div>
    
                    <div className="accions">
                        <button onClick={this.addBook}className="button btn-blue">Add book</button>
                    </div>
                </div>

                {
                    (this.state.newItemPanel) ?  <PanelAdd oncancel={this.onCancel} onadd={this.props.onadd}/> : ''
                }
    
                
    
            </div>
        );
    }
}

export default Menu;