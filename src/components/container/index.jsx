import { defaults } from "react-chartjs-2";
import './styles.css'

export default function Container(props){
    const { component } = props
    return(
        <section className='container'>
            {component()}
        </section>
    )
}