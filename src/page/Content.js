import React from 'React';
import ShoppingList from './ShoppingList';
import Picture from './Picture';
import Square from './Square';
import Demo from './Demo';

class Content extends React.Component {
    render() {
        const picture = {
            src: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
        };
        return (
            <div>
                <ShoppingList name="xq"/>
                <Picture src = {picture.src}>
                
                </Picture>
                <Square/>
                <Demo/>
            </div>
        )
    }
}

export default Content;
