import React from 'React';
import ShoppingList from './ShoppingList';
import Picture from './Picture';
import Square from './Square';

class Content extends React.Component {
    render() {
        const picture = {
            src: 'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg',
        };
        return (
            <div>
                <ShoppingList name="xq"/>
                <Picture src = {picture.src}>
                    
                </Picture>
                <Square />
            </div>
        )
    }
}

export default Content;
