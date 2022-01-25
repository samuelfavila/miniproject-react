import React from 'react';

import Button from './components/Button'

const TaskDetails = () => {
    return ( 
        <>
            <div className='back-button-container'>
                <Button>Voltar</Button>
            </div>
            <div className="task-details container">
                <p></p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta molestias doloribus praesentium modi commodi, dolores odio recusandae perferendis error. Aspernatur.
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;