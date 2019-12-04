import React from 'react';


const Validation = (props) => {


let words = null;

if ( props.length < 5 && 0 < props.length) {

    words = 'text is too short'} else if (props.length >= 5) {
    words = 'text is long enough' 
    } 



return (

    <div>


    <p>{words}</p>


    </div>

)


}

export default Validation; 