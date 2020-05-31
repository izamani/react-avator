import React,{Component} from 'react';
import './App.css';
import 'tachyons';
import Avatorlist from './Avatorlist';

export default class Avator extends Component{
    constructor(props){
        super(props);
        this.state={
            name : "Welcome To Ghost Avator"
        }
    }
    namechange(){
        this.setState({
            name : "Fucking Set State"
        })
    }
    render() {
    const Avatorlistarray = [
        {
            id : 1,
            name : "Suliman Ro",
            work : "Web Desginer"
        }, 
        {
            id : 2,
            name : "Mukhtar10",
            work : "Frontend Developer"
        },    
        {
            id : 3,
            name : "Hashmat1",
            work : "Web Desginer"
        }, 
        {
            id : 1,
            name : "AmirZaman",
            work : "Backend Developer"
        }      
     ]
     const arrayavatorcard = Avatorlistarray.map((avatorcard,i)=> {
         return <Avatorlist key={i} id={Avatorlistarray[i].id}
                            name={Avatorlistarray[i].name}
                            work={Avatorlistarray[i].work} />
     }) 
   
        return (
            <div className="mainpage">
                <h1>{this.state.name}</h1>
               {arrayavatorcard}
                <br />
                <button onClick={()=> this.namechange()}> Subscribe</button>
            </div>
                )
        
            }
}    
    
    
