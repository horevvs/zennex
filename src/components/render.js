



function Render(props) {
    return (
        <div>
            <div style={props.fontSize} className='fonts'> {props.post.auto} </div>
            <div className='point'> <img className='size' src={props.post.img} alt='' /> </div>
        </div>
    )
}

export default Render;