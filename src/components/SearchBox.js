import React from 'react';

const SearchBox = (props) => {
    const { onChange } = props;
    
    return (
        <div className='pa2'>
           <input className='pa3 ba b--green bg-lightest-blue' onChange={onChange} type='search' placeholder='search robots'/> 
        </div>        
    )
    
}

export default SearchBox;