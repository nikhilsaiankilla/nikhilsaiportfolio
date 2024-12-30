import './style.scss'
import 'react-lazy-load-image-component/src/effects/blur.css';

import Button from '../buttons/Button'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom'

const Project = ({ project }) => {
    const navigate = useNavigate();

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
        <div className="project" onClick={() => navigate(`/project/${project?.id}`)}>
            <div className="image">
                <div className="overlay"></div>
                <LazyLoadImage
                    effect="blur"
                    alt={project?.name}
                    src={project?.image_url}
                    wrapperProps={{
                        style: { transitionDelay: "1s" },
                    }}
                />
            </div>
            <div className="info">
                <h2 className="title">{project?.name}</h2>
                <p>{trimTextToLength(project?.tagline, 140) + "..."}</p>

                <div className="buttons">
                    <Button title="view project" link={project?.demo_url} />
                    <Button title="view code" link={project?.code_url} />
                </div>
            </div>
        </div>
    )
}

export default Project