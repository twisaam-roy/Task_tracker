
let Button = ({ color, text, onClick }: any) => {
   

    return (
        <button onClick={onClick}  style={{ backgroundColor: color }} className='btn'>{text}</button>
    )
};



export default Button
