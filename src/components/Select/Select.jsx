import React, { useState, useEffect } from 'react';
import { countriesByCode, years, countriesPIB } from '../../data/data'
import './styles.css'

export default function Select(props){
    const { type, getValue, value, chart } = props
    const theValue = (e) => {
        getValue(e.target.value)
    }

    const renderOptions = () => {
        if(type === 'years') {
            return years.map((e, i)=> <option key={`${e}-${i}`} value={e} className="line-option">{e}</option> )
        } else if (type === 'pib'){
            return countriesPIB.map(e => <option key={e.code} value={e.code}>{e.name}</option> )
        } else {
            return countriesByCode.map(e => <option key={e.code} value={e.code}>{e.name}</option> )
        }
    }

    return(
        <div>
            <select onChange={(e) => theValue(e)} className={chart === "pie"? "":"line-select"} value={value}>
                {renderOptions()}
            </select>
        </div>
    )
}