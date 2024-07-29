
const Card = ({image, title,leftButton,rightButton}) => {
  return (
    <>
      <div >
        <div className="flex flex-col w-[220px] h-[175px] items-center">
          <img src={image} alt="Model S" className="h-24 w-24"/>
          <span className="text-sm font-medium">{title}</span>
          <div>
            <button>{leftButton}</button>
            <button>{rightButton}</button>
          </div>
          
        </div>
        </div>

    </>
    
  )
}

export default Card