import './styles.css'

export default function Container(props){
    const { component, title } = props

    return(
        <section className='container'>
            {component({title})}
        </section>
    )
}