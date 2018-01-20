// let visibilty = false;
// const toggleVisibilty = () => {
//     visibilty=!visibilty;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibilty</h1>
//             <button onClick={toggleVisibilty}>
//                 {visibilty ? 'hide details ': 'show details'}
//             </button>
//             {
//                 visibilty && (
//                     <div>
//                         Hi there
//                     </div>
//                 )
//             }
//         </div>

//     );

//     ReactDOM.render(jsx,document.getElementById('app'));
// }

// render();

class VisibiltyToggle extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            visibilty: false
        }
        this.handleToggle=this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState( (prevState)  => {
            return{
            visibilty:!prevState.visibilty
            }
        });
    }
    render() {
        return(
            <div>
                         <h1>Visibilty</h1>
                         <button onClick={this.handleToggle}>
                             {this.state.visibilty ? 'hide details ': 'show details'}
                         </button>
                         {
                             this.state.visibilty && (
                                 <div>
                                     Hi there
                                 </div>
                             )
                         }
                     </div>
        );
    };
}

ReactDOM.render(<VisibiltyToggle />,document.getElementById('app'));
