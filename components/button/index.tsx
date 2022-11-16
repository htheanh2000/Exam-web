import { ReactNode } from 'react';
import style from './style.module.scss'
import cn from 'classnames'

type Props = {
    children?: ReactNode;
    type?: 'primary' | 'secondary';
    className?: string;
    size?: 'sm' | 'md' ;
    mode?: 'light' | 'dark'; 
    onClick?: () => void;
};

const spanStyle = {
    'sm' : 'base2',
    'md' : 'base1',
}

const button = (props: Props) => {
    const { type = 'primary', className, size = 'md' , mode = 'light' } = props
    return (
        <div className={cn(style.button, style[`button--${type}`], className, style[`button--${size}`])}>
            <span className={cn(spanStyle[size])} >{props.children}</span>
        </div>
    )
}

export default button