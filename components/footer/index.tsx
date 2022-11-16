import Image from 'next/image'
import style from './style.module.scss'
import background from '../../assets/images/footer/background.png'
import Icon from '../icon'
import Link from 'next/link'
import { FOOTERS, SOCIALS, FOOTERS_POLICY } from './constants'
import cn from 'classnames'
import Button from '../button'


const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.community}>
                <Image src={background} />
                <div className={style.content}>
                    <h1>Join our community</h1>
                    <p className='body1'>Iste animi consectetur dicta dolorem</p>
                    <div className={style.socialWrapper}>
                        {
                            SOCIALS.map(social =>
                                <div className={style.social}>
                                    <Link href={social.url}>
                                        <Icon size='sm' name={social.name} />
                                    </Link>
                                </div>)
                        }
                    </div>
                </div>

            </div>
            <div className={cn(style.footer, style['border-bottom'])}>
                <div className={style['footer--link-wrapper']}>
                    {
                        FOOTERS.map(link => <Link href={link.url}><p className={cn('base2', style.link)}>{link.name}</p></Link>)
                    }
                </div>
                <Button type='secondary' size='sm'>Play now</Button>
            </div>
            <div className={style.footerSecond}>
                <p className='caption2'>© 2022 UI8</p>
                <div className={style['footerSecond--link-wrapper']}>
                    {
                        FOOTERS_POLICY.map(link => <Link href={link.url}><p className={cn('caption2', style.link)}>{link.name}</p></Link>)
                    }
                </div>
            </div>
        </div>
    )

}

export default Footer