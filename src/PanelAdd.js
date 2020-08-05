import React from 'react';


class PanelAdd extends React.Component{

    constructor(props){
        super(props);

        this.state = {};
    }


    onSubmit(e){
        e.preventDefault();
        
    }

    render(){
        return(
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label> Titulo del libro </label> <br/>
                            <input type="text" name="title" className="input" placeholder="Libro..."/>
                        </p>
    
                        <p>
                            <label> Titulo de la imagen </label> <br/>
                            <input type="text" name="image" className="input" placeholder="Imagen..."/>
                        </p>
    
                        <p>
                            <label> Clasificación </label> <br/>
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
    
                        <input type="submit" className="button btn-blue" value="Registrar libro"/>
                        <button onClick= {this.props.oncancel} className="button btn-normal">Cancelar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PanelAdd;