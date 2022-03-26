import React from 'react';
import './Qna.css'

const Qna = () => {
    return (
        <div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        PROPS vs STATE
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p><strong>PROPS</strong></p>
                        
                        <p> The Data is passed from one component to another.</p>
                        <p> PROPS is Immutable (cannot be modified).</p>
                        <p> PROPS can be used with state and functional components.</p>
                        <p><strong>STATE</strong></p>
                        <p>state Data is passed within the component only.</p>
                        <p>state is Mutable ( can be modified).</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How useState works?
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>useState</strong> enables us to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component.

                        Whereas the state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type we can imagine.
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Qna;