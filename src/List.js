import React from 'react';

// importar componentes
import Item from './Item';
function List(props){
    console.log(props);
    return(
        
        <div className="list">
            {
                props.items.map(item =>
                    <Item 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    rating={item.rating}
                    image={item.image}
                    ></Item>
                )
            }
        </div>
    );
}

export default List;