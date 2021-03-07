import React, { useState, useEffect } from 'react';
import { countriesByCode, years } from '../../data/data'
import './styles.css'

export default function Select(props){
    const { type, getValue, value } = props
    const theValue = (e) => {
        getValue(e.target.value)
        console.log("valor en select", e.target.value)
    }
    return(
        <div>
            <select onChange={(e) => theValue(e)} className="line-select" value={value}>
                { type === 'years' ?
                    years.map((e, i)=> <option key={`${e}-${i}`} value={e} className="line-option">{e}</option> )
                :
                    countriesByCode.map(e => <option key={e.code} value={e.code}>{e.name}</option> )
                }
            </select>
        </div>
    )
}