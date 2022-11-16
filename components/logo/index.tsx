import Image from 'next/image'
import logo from '../../assets/images/logo.png'
import style from './style.module.scss'

type Props = {
    className?: string
    width?: number
    height?: number
}

const Logo = (props: Props) => {
    const { className, width, height } = props;
    return (
        <div className={className}>
            <Image
                src={logo}
                width={width}
                height={height}
                className={style.logo}
                alt={`Astro Clash Logo`}
                priority
            />
        </div>
    )
}

export default Logo