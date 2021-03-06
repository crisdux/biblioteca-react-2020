import React from 'react';


class PanelAdd extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title:'',
            image: '',
            rating: 1

        };
    }

    onChanceTitle = (e) => {
        this.setState({title: e.target.value});
    }

    onChanceImage = (e) => {
        this.setState({image: e.target.value});
    }

    onChanceRating= (e) => {
        const rating = parseInt(e.target.value)
        this.setState({rating: rating});
    }


    onSubmit = (e) => {
        e.preventDefault();

        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;

        this.props.onadd({title: title, image:image, rating: rating});
        this.props.oncancel();
        
    }

    render(){
        return(
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label> Titulo del libro </label> <br/>
                            <input onChange={this.onChanceTitle} type="text" name="title" className="input" placeholder="Libro..."/>
                        </p>
    
                        <p>
                            <label> Titulo de la imagen </label> <br/>
                            <input onChange={this.onChanceImage} type="text" name="image" className="input" placeholder="Imagen..."/>
                        </p>
    
                        <p>
                            <label> Clasificación </label> <br/>
                            <select onChange={this.onChanceRating}>
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