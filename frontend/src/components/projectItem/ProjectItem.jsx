import './style.scss'

import Img from '../lazyLoadImg/Img'
import Button from '../buttons/Button'

const ProjectItem = ({ project, index }) => {

    const handleNavigation = (link) => {
        window.open(link, '_blank');
    }

    return (
        <div className="project">
            <div className="img-div">
                <Img src={project?.img} />
            </div>
            <div className="project-info">
                <h6 className="project-number">{'<'}Project {index + 1}{'/>'}</h6>
                <h2 className="project-title" onClick={() => handleNavigation(project?.gitLink)}>{project?.title}</h2>
                <p className="project-desc">{project?.desc}</p>
                <div className="buttons">
                    <Button title="Demo" className='btn' link={project?.liveLink} />
                    <Button title="Code" className='btn' link={project?.gitLink} />
                </div>
            </div>
            <div className="sm-project-desc">
                <h6 className="project-number">{'<'}Project {index + 1}{'/>'}</h6>
                <h2 className="project-title">{project?.title}</h2>
                <div className="buttons">
                    <Button title="Demo" className='btn' link={project?.liveLink} />
                    <Button title="Code" className='btn' link={project?.gitLink} />
                </div>
            </div>
        </div>
    )
}

export default ProjectItem