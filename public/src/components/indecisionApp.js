import React from 'react';
import AddOption from './Addoption';
import Option from './Option';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';
export default class IndecisionApp extends React.Component{
    
        constructor(props){
            super(props);
            this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
            this.handlePick=this.handlePick.bind(this);
            this.handleAddOption=this.handleAddOption.bind(this);
            this.handleDeleteOption=this.handleDeleteOption.bind(this);
            this.handleClearOption=this.handleClearOption.bind(this);
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
        
        handleClearOption() {
            this.setState( () => ({selectedOption:undefined}));
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
            this.setState( () => ({
                selectedOption: option
            }));
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
                    <div className="container">
                    <Action hasOptions={this.state.options.length < 0}
                      handlePick={this.handlePick}/>
                    <div className="widget">
                    <Options options={this.state.options}
                      handleDeleteOptions={this.handleDeleteOptions}
                      handleDeleteOption={this.handleDeleteOption}/> 
                    <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal 
                    selectedOption= {this.state.selectedOption} 
                    handleClearOption={this.handleClearOption}/>
                </div>
            );
        }
    }
    
    IndecisionApp.defaultProps= {
    
    }