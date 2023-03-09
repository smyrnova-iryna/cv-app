import React from "react"

const Projects = (props) => {
    return (
        <div>
            <h2 className="mainPageTitle">{props.title}</h2>
            <ul>
                <li>
                    <p>{props.projectsList[0].description} - [{props.projectsList[0].technologies}]</p>
                    <p>{props.projectsList[0].url}</p>
                </li>
                <li>
                    <p>{props.projectsList[1].description} - [{props.projectsList[1].technologies}]</p>
                    <p><a className='mainPageLink' href={props.projectsList[1].url} rel="noreferrer" target="_blank">{props.projectsList[1].url} </a></p>
                </li>
                <li>
                    <p>{props.projectsList[2].description} - [{props.projectsList[2].technologies}]</p>
                    <p><a className='mainPageLink' href={props.projectsList[2].url} rel="noreferrer" target="_blank">{props.projectsList[2].url}</a></p>
                </li>
                <li>
                    <p>{props.projectsList[3].description} - [{props.projectsList[3].technologies}]</p>
                    <p><a className='mainPageLink' href={props.projectsList[3].url} rel="noreferrer" target="_blank">{props.projectsList[3].url}</a></p>
                </li>
            </ul>
        </div>
    )
}

export default Projects
