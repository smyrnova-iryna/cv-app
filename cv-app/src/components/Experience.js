import React from "react";

const Experience = (props) => {
    return (
        <div>
            <h2 className="mainPageTitle">{props.title}</h2>
            <p>{props.position} {props.company}</p>
            <p>{props.description}</p>
            <p>[ {props.startDate} - {props.finishDate} ]</p>
         </div>
    )
}

export default Experience