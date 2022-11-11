const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);

const animals = [
    {type: `turtle`, icon: `🐢`},
    {type: `octopus`, icon: `🐙`},
    {type: `fish`, icon: `🐠`},
    {type: `flamingo`, icon: `🦩`},
    {type: `penguin`, icon: `🐧`}
]

const randomValue = (min, max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max-min) + min);
}

class Table extends React.Component{
    constructor(props){
        super(props);
        
        const changeStyle = setInterval(() => {

            let randomIndex = randomValue(0, this.state.listIndex.length);
            let randomItem = this.state.listIndex[randomIndex];
            
            this.state.list[randomItem].active = true;
            this.state.listIndex.splice(randomIndex, 1);

            if (this.state.listIndex.length == Math.floor(this.state.list.length/2)) this.state.borderWidth = `10px`;

            if (!this.state.listIndex.length) {
                clearInterval(changeStyle);
                this.state.borderWidth = `20px`;
            }

            this.setState({});
        }, 2000);
    }

    state = {
        list: this.props.list,
        listIndex: Object.keys(this.props.list),
        borderWidth: 0,
        styleItem: {}
    }
    
    render() {
        return <table style={{ borderWidth: this.state.borderWidth }}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Icon</th>
            </tr>
        </thead>
        <tbody>
            {this.state.list.map((item, index) => (
                <tr style={item.active && {color: `green`, fontWeight: `bold`}} key={index}>
                        <td>{item.type}</td>
                        <td>{item.icon}</td>
                    </tr>
            ))}
            </tbody>
            </table>
    }
}

root.render(
    <React.Fragment>
        <Table list={animals}></Table>
    </React.Fragment>
)

