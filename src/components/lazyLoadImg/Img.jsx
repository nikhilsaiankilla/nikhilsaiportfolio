import './style.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Img = ({ src }) => {
    return (
        <div className='img'>
            <LazyLoadImage
                alt={src}
                effect='blur'
                height='99%'
                src={src}
                width="100%" />
        </div>
    )
}

export default Img