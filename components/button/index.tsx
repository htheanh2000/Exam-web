import { ReactNode } from 'react';
import style from './style.module.scss'
import cn from 'classnames'

type Props = {
    children?: ReactNode;
    type?: 'primary' | 'secondary';
    className?: string;
    size?: 'sm' | 'md' ;
    mode?: 'light' | 'dark';
    bg?: string;
    bgHover?: string;
    color?: string;
    colorHover?: string; 
    onClick?: () => void;
    customStyle?: string;
};

const spanStyle = {
    'sm' : 'base2',
    'md' : 'base1',
}



const button = (props: Props) => {
    const { type = 'primary', className, size = 'md',onClick , customStyle} = props
    return (
        <div onClick={onClick} className={cn(style.button, style[`button--${type}`], className, style[`button--${size}`])}>
            <span className={cn(spanStyle[size])} >{props.children}</span>
        </div>
    )
}

export default button