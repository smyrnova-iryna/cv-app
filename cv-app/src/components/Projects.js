import React from "react"

const Projects = (props) => {
    return (
        <div>
            <h2 className="mainPageTitle">{props.title}</h2>
            <ul>
                <li>
                    <p>{props.projectsList[0].description} - [{props.projectsList[0].technologies}]</p>
                    <p><a className='mainPageLink' href='https://smyrnova-iryna.github.io/contact-us-form/ '>{props.projectsList[0].url}</a></p>
                </li>
                <li>
                    <p>{props.projectsList[1].description} - [{props.projectsList[1].technologies}]</p>
                    <p><a className='mainPageLink' href='https://smyrnova-iryna.github.io/cv/'>{props.projectsList[1].url}</a></p>
                </li>
            </ul>
        </div>
    )
}

export default Projects
