import React from 'react';

export default function City (props){
    

    /* const city = props.cities[props.currentIndex]; */
    const city = props.city;

    return <div>
        <h3>{city.name}</h3>
        {/* <textarea value={city.description} onChange={(e) => props.onChangeCity(props.currentIndex, e.target.value)}/> */}
        <textarea value={city.description} onChange={(e) => props.onChangeCity(props.city.name, e.target.value)}/>
    </div>
    
}