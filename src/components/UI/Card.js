import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className
    // props.children is the content inbetween opening and closing Card Tags
    return <div className={classes}>{props.children}</div>
}

export default Card;