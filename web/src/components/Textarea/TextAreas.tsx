import React,{TextareaHTMLAttributes} from 'react'
import './styles.css';

// Com isso consigo fazer com que o componente tenha acesso a todas os
// Atributos do html
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label:string;
    name:string;
}

const TextareaComponent:React.FC<TextareaProps>=({name,label,...rest})=> {
    return (
        <div className='Textarea-block'>
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} placeholder='Digite a sua biografia aqui...'/>
        </div>
    );
}

export default TextareaComponent