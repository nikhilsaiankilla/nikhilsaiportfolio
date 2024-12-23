import './style.scss'

import Button from '../buttons/Button'

const Project = ({ project }) => {

    const trimTextToLength = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text; 
        }
        let trimmedText = text.slice(0, maxLength);

        if (text[maxLength] !== " " && trimmedText.trim().lastIndexOf(" ") !== -1) {
            trimmedText = trimmedText.slice(0, trimmedText.lastIndexOf(" "));
        }
        return trimmedText.trim();
    }
    
    return (
        <div className="project">
            <div className="image">
                <div className="overlay"></div>
                <img src={project?.img} alt="project thumbnail" />
            </div>
            <div className="info">
                <h2 className="title">{project?.title}</h2>
                <p>{trimTextToLength(project?.desc, 140) + "..."}</p>

                <div className="buttons">
                    <Button title="view project" link={project?.liveLink} />
                    <Button title="view code" link={project?.gitLink} />
                </div>
            </div>
        </div>
    )
}

export default Project