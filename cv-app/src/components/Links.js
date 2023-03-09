import React from "react";

const Links = (props) => {
    return (
        <div className="linksBlock">
            <p><a className="sideBarLink" href={props.gh.link} rel="noreferrer" target="_blank">{props.gh.title}</a></p>
            <p><a className="sideBarLink" href={props.linkedIn.link} rel="noreferrer" target="_blank">{props.linkedIn.title}</a></p>
        </div>
    )
}

export default Links