import Image from 'next/image'
import heroImg from '../../../assets/images/homepage/hero/hero.png'
import Button from '../../button'
import style from './style.module.scss'
import img1 from '../../../assets/images/homepage/hero/1.png'
import img2 from '../../../assets/images/homepage/hero/2.png'
import img3 from '../../../assets/images/homepage/hero/3.png'
import cn from 'classnames'
import Link from 'next/link'

const HERO_INFO = [
    {
        img: img1,
        backgroundColor: '#30B28C',
        title: 'Khách hàng',
        number: '57',
        sub: ''
    },
    {
        img: img2,
        backgroundColor: '#9F73E6',
        title: 'Tỉ lệ thành công',
        number: '98,72%',
        sub: '$833,722'
    },
    {
        img: img3,
        backgroundColor: '#FDC24F',
        title: 'Số gương mặt đã nhận diện',
        number: '8,321',
        sub: ''
    }
]

const Hero = () => {
    return (
        <div className={style.container}>
            <div className={style.heroWrapper}>
                <div className={style.wrapper}>
                    <h1 className={style.title}> <span>99%</span> Tỉ lệ <br /> Chính xác khi <br /> nhận diện.</h1>
                    <h6>Ứng dụng điểm danh bằng khuôn mặt</h6>
                    <Link href="/dang-ki" >
                        <a>
                            <Button className={style.button}>Đăng kí ngay</Button>
                        </a>
                    </Link>
                </div>
                <div className={style.heroImg}>
                    <Image src={heroImg} />
                </div>
            </div>

            <div className={style.contentWrapper}>
                {
                    HERO_INFO.map(item =>
                        <div className={style.cardWrapper}>
                            <div className={style.card}>
                                <div className={cn(style.imgWrapper)} style={{ backgroundColor: item.backgroundColor }}>
                                    <Image width={64} height={64} src={item.img} />
                                </div>
                                <div className={style.content}>
                                    <p className={'base1'}>{item.title}</p>
                                    <h3>{item.number}</h3>
                                </div>
                            </div>
                        </div>)
                }

            </div>
        </div>
    )
}

export default Hero