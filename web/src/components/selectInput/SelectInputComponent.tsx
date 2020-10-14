import React,{SelectHTMLAttributes} from 'react'
import './styles.css';

// Com isso consigo fazer com que o componente tenha acesso a todas os
// Atributos do html
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label:string;
    name:string;
    options:Array<{value:string,label:string}>
}

const SelectComponent:React.FC<SelectProps>=({name,label,options,...rest})=> {
    return (
        <div className='Select-block'>
            <label htmlFor={name}>{label}</label>
            <select  value="" id={name} {...rest}>
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(e=>(
                    <option key={e.value} value={e.value} >{e.label} </option>
                ))}
            </select>
        </div>
    );
}

export default SelectComponent