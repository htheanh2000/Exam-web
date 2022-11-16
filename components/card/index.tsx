import Image from 'next/image'
import style from './style.module.scss'
import img1 from '../../assets/images/planet/1.png'
import cn from 'classnames'
import Icon from '../icon'
import Button from '../button'

type Props = {
    id: string,
    coinPrice: string,
    name: string,
    price: string,
    img: any
}

const Card = (props: Props) => {
    const {id, coinPrice, name, price, img} = props
    return (
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.label}>
                    <p className='base2'>New</p>
                </div>
                <Image src={img} />
                <div className={style.overlay}>
                    <div className={style.likeButton}>
                        <Icon name='heart' size='sm' />
                    </div>
                    <div className={style.centerBtn}>
                        <Button  className={style.detail} type='secondary'>View Detail</Button>
                    </div>

                </div>
            </div>
            <div className={style.information}>
                <div className={style.line}>
                    <p className={cn(style.id, 'caption2')}>#{id}</p>
                    <p className={cn(style.coinPrice, 'base2')}>{coinPrice}</p>
                </div>
                <div className={style.line}>
                    <p className={cn(style.name, 'title')}>{name}</p>
                    <p className={cn(style.price, 'caption2')}>${price}</p>
                </div>
            </div>
        </div>
    )
}

export default Card