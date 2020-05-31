import React from 'react';
const Avatorlist = (props) => {
    return (
        <div className="avator ma4 bg-light-purple dib grow shadow-4 pa4 tc"> 
        <img src={`https://joeschmoe.io/api/v1/random${props.name}`} alt="Avator" />
        <h1 className="">{props.name}</h1> 
    <p>{props.work}</p>
    <br />
    </div>)
    
}
export default Avatorlist;