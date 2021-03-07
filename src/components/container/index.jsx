import './styles.css'

export default function Container(props){
    const { component } = props

    return(
        <section className='container'>
            {component()}
        </section>
    )
}