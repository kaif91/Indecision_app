import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/indecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

    // const User = (props) => {
    //     return (
    //         <div>
    //             <p>Name: {props.name}</p>
    //             <p>age:{props.age} </p>
    //         </div> 
    //     );
    // };
    
    
    ReactDOM.render(<IndecisionApp options = {['One','Two']}/>,document.getElementById('app'));