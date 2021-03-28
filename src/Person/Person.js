import React from 'react';
import styled from 'styled-components';

import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: 50px auto;
    background-color: #eee;
    -webkit-box-shadow: 7px 7px 20px 5px rgba(112,112,112,0.49);
    box-shadow: 7px 7px 20px 5px rgba(112,112,112,0.49);
    padding: 15px 15px 15px 15px;

    @media (min-width: 500px) {
      width: 450px
    }
`

const person = props => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <StyledDiv>
            <p onClick={ props.click } className="p1">I'm { props.name } and I am { props.age } years old!</p>
            <p>{ props.children }</p>
            <input type="text" onChange={ props.changed } value={ props.name } />
        </StyledDiv>
    )
}

export default person;