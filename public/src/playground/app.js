class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);
        this.state = {
            options  : props.options
        }
    }

    componentDidMount() {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
        this.setState( () =>({options}));
        }
    }


    componentDidUpdate(prevProps,prevState) {
        if(prevState.options.length != this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options',json);
        }
    }


    componentWillUnmount() {
        console.log('component will unmount');
    }
    
    handleAddOption(option) {
        if(!option){
            return 'Enter valid value to add item';
        }
        else if(this.state.options.indexOf(option) > -1){
            return 'This option already exist';
        } 

       this.setState( (prevState) => ({
        options: prevState.options.concat(option) 
       }));
    }

    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        alert(option);
    }

    handleDeleteOptions() {
        this.setState(() => ({
            options:[]
        }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState( (prevState) => ({
            options: prevState.options.filter( (option) => {
                return optionToRemove !== option;
            })
        }));
    }
    render(){
        const title='Indecision';
        const subtitle='sub title';

        return (
            <div>
                <Header />
                <Action hasOptions={this.state.options.length < 0}
                  handlePick={this.handlePick}/>
                <Options options={this.state.options}
                  handleDeleteOptions={this.handleDeleteOptions}
                  handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps= {

}

const Header =  (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>Put your life in hands of computer</h2>   
        </div>
    );
};
Header.defaultProps= {
     title:'Default title'
}

const Action = (props) => {
    return (
        <div>
           <button onClick={props.handlePick}
            disabled= {props.hasOptions}>
            What should i do?</button>
           
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => <Option key={option}
                 optionText={option}
                 handleDeleteOption={props.handleDeleteOption} /> )
            }
        </div>              
    );
};

const Option = (props) => {
    return (
        <div>
          <p>{props.optionText}</p>
          <button onClick={ (e) => {
              props.handleDeleteOption(props.optionText);
          }}>Delete</button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state = {
            error:undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error =this.props.handleAddOption(option);
        if(error){
            alert(error);
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                    </form>
            </div>
        );
    }
}
const jsx = (
    <div>
     <h1>Title</h1>
     <Header/ >
     <Action/ >
     <Options/ >
     <AddOption/ >
    </div>
);

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>age:{props.age} </p>
//         </div> 
//     );
// };


ReactDOM.render(<IndecisionApp options = {['One','Two']}/>,document.getElementById('app'));