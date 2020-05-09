import React from 'react';

const Card = ({name, email, id}) =>{
  //alternate way if not given paras abobe const {name, email, id} = props;
  // to call id etc. we can skip all this and do directly without destructure like ${props.id}
  return(
    <div className='tc bg-hot-pink dib br3 pa3 ma2 grow shadow-5'>
      <img alt='robots' src ={`https://robohash.org/${id}?200x200`} />
       <div>
         <h2>{name}</h2>
         <p>{email}</p>
       </div>
    </div>
  );
}
// wrap props.anything in { } because it's JS expression
//template string should be wrapped in a {} so it's a JS
//template strings are enclosed in ``
export default Card;
