import React from 'react';

class EventComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: props.name,
            tags: props.tags,
            price: props.price,
            description: props.description, 
            slug: props.slug, 
            manufacturer: props.manufacturer, 
            itemType: props.itemType,
            added: props.added
        };
    }
    render() {
        return (
            <div>
                <img src="https://picsum.photos/100/100" alt={this.state.name}/>
                <p>{this.state.price} TL</p>
                <p style={{ fontSize: "15px"}}>{this.state.name}</p>
            </div>
        );
    }
}
export default EventComponent;