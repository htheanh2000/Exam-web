import { ReactNode } from 'react';
import style from './style.module.scss'


type Props = {
    children?: ReactNode;
}

const Card = (props: Props) => {
    return (
        <div className={style.container}>
            {props.children}
        </div>
    )
}

export default Card