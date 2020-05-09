import React from 'react';

const SearchBox = ({searchfield, searchChange})=>{
  //destructure here { }
  return(
    <div className='pa2'>
    <input
      className='pa2 ba b--black bg-light-silver .br-pill '
      type ='search'
      placeholder='Search Robots...'
      onChange={searchChange}
    />
    </div>
  );
}
export default SearchBox;
