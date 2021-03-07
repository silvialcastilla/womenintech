import './styles.css'

export default function Button(props){
    const { click } = props
    
    return(
        <button className='button' onClick={click}>Representar</button>
    )
}