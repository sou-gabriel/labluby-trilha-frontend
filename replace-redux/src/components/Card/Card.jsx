import './Card.css'

export const Card = (props) => {
  return (
    <div className='card' style={props.style}>
      {props.children}
    </div>
  )
}
