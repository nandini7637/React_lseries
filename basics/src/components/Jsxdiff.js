import React from 'react';


const Jsxdiff = () => {

// This is simple Js type

/*return (
    <div className ="jsx">
<h1>Comparision btw JSX and Js and this is js type</h1>
    </div>
)*/

// This is JSX type

return React.createElement('div',{id: 'jsx', className: 'jsxdiff'},
React.createElement('h1',null,'JSX format'));




}


export default Jsxdiff;