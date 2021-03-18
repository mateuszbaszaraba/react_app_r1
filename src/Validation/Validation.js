import React from 'react';

const Validation = props => {
    let message = 'Text long enough';

    if(props.userInput <=5) {
        message = 'Text too short';
    }

    return (
        <div>
            {message};
        </div>
    )
}

export default Validation;