import './style.scss'

const PageTitle = ({ title, color }) => {
  const openBracket = '[';
  const closeBracket = ']';
  return (

    // If color === white then text color is White  else Black
    <h1 className='title' style={{ color: `${color === "white" ? "#ffffff" : "#000000"}` }}>
      {openBracket} {title} {closeBracket}
    </h1>
  )
}

export default PageTitle