import '../sass/Button.scss';
const Button = ({icon,handleClick}) => {
  return (
    <div className="btn___box">
      <button 
        className="btn" 
        onClick={handleClick}>{icon}</button>
      <div className="btn___shadow"></div>
    </div>
  )
}

export {Button}
