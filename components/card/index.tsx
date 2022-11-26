import classNames from 'classnames';
import { ReactNode } from 'react';
import style from './style.module.scss'


type Props = {
    children?: ReactNode;
    className?: string;
}

const Card = (props: Props) => {
    return (
        <div className={classNames(style.container, props.className)}>
            {props.children}
        </div>
    )
}

export default Card