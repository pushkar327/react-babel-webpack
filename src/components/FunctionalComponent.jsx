import React from 'react';

export const FunctionalComponent = ({ name, job }) => {
    return (<div className='firstBlock border'>
        <h3>FUNCTIONAL COMPONENT</h3>
        <ul>
            <li className="margin-t-10">
                I'm a functional component.
            </li>
            <li className="margin-t-10">
                I just take props and return a value.
            </li>
            <li className="margin-t-10">
                In short, I don't use my brain and have no state of my own.
            </li>
            <li className="margin-t-10  margin-b-10">
                Rest assured that you'll get the same response given you pass me the same props i.e., I'M PURE!
            </li>
        </ul>
        <div className="margin-t-10 margin-l-10 margin-b-10">
            In this case, I received name and job as introduction props in order to introduce the user.
           <div className="margin-t-10">Hi ! My name is <strong>{name}</strong> and I'm a <strong>{job}</strong></div>
        </div>
    </div>);
}