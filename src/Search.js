import React, {Component} from 'react';

class Search extends Component{

    constructor(props){
        super(props);
    }

    onChangeEvent = e => {
        const query = e.target.value.toString().toLowerCase();
        this.props.onsearch(query);
    }

    render(){
        return(
            <input onChange= {this.onChangeEvent} type="text" />  
         );
    }
}

export default Search;