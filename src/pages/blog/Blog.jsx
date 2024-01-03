import './style.scss'

//Importing Components
import { useParams } from 'react-router-dom'


const Blog = () => {
  const { blogId } = useParams();
  return (
    <div>
      {blogId}
    </div>
  )
}

export default Blog