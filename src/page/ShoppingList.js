import React from 'React';

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                {console.log(this.props)}
                <h1>ShoppingList List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

export default ShoppingList;
