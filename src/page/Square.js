class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button
                className="square"
                onClick={() => this.setState({value: 'X', xyz: 'Y'})}
            >
                {this.state.value}
                {this.state.xyz}
            </button>
        );
    }
}

export default Square;