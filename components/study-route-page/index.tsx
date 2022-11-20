import Image from 'next/image'
import Card from '../card'
import NavSideBar from '../nav-sidebar'
import SearchBox from '../searchbox'
import style from './style.module.scss'
import Img from '../../assets/images/study-route-page/img.png'
import Img1 from '../../assets/images/study-route-page/1.png'
import Img2 from '../../assets/images/study-route-page/2.png'
import Img3 from '../../assets/images/study-route-page/3.png'
import Img4 from '../../assets/images/study-route-page/4.png'
import Img5 from '../../assets/images/comp.png'
import ProgressBar from '../progress-bar'
const data = [
    {
        sub: 'Toán',
        duration: '30 Phút',
        icon: Img1
    },
    {
        sub: 'Vật lý',
        duration: '1 Giờ',
        icon: Img2
    },
    {
        sub: 'Hóa học',
        duration: '2 Giờ',
        icon: Img3
    },
    {
        sub: 'Tiếng Anh',
        duration: '1.5 Giờ',
        icon: Img4
    }
]

const goals = [
    {
        sub: 'Vật lý',
        score: 9,
        percents: 50,
        color: '#6C5DD3'
    },
    {
        sub: 'Vật lý',
        score: 9,
        percents: 70,
        color: '#7FBA7A'
    },
    {
        sub: 'Vật lý',
        score: 9,
        percents: 80,
        color: '#FFCE73'
    },
    {
        sub: 'Vật lý',
        score: 9,
        percents: 90,
        color: '#FFA2C0'
    }
]
const StudyRoutePage = () => {
    return (
        <div className={style.container}>
            <NavSideBar />
            <div className={style.mainpage}>
                <div className={style.header}>
                    <div>
                        <h6>Hi The Anh</h6>
                        <h2>Lộ trình học 🎉</h2>
                    </div>
                    <div className={style.searchBox}>
                        <SearchBox />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <Card >
                        <h6>Thời gian luyện tập 💡</h6>
                        <h1 style={{ marginTop: 32 }}>4h</h1>
                        <div className='flex'>
                            <Image src={Img} />
                            <p className='caption2 max-w-[100px] ml-4'>Bạn đã dành 47 giờ để học</p>
                        </div>

                        <div className='flex mt-8'>
                            {data.map(item =>
                                <div className='w-40 h-30 border px-6 py-4 rounded'>
                                    <div className='flex items-center'>
                                        <Image src={item.icon} />
                                        <span className='ml-2 text-base caption2'>{item.sub}</span>
                                    </div>
                                    <h5 className='mt-5 font-bold'>{item.duration}</h5>
                                </div>
                            )}
                        </div>
                    </Card>

                    <Card>
                        <h6>Mục tiêu của bạn</h6>
                        <div className='mt-4 relative flex items-center justify-center w-25 h-36'>
                            <div className='absolute rounded-2xl bg-[#A0D7E7] top-0 right-0 h-36 w-1/2'>
                            </div>
                            <Image width={120} height={120} src={Img5} />
                        </div>
                        <div className='mt-4 w-52'>
                            {
                                goals.map(item =>
                                    <div>
                                        <div className='flex justify-between'>
                                            <p className='font-semibold text-base'>{item.sub}</p>
                                            <p className='font-semibold'>{item.score}</p>
                                        </div>
                                        <ProgressBar className='w-full mt-2 mb-4' percents={item.percents} color={item.color} />
                                    </div>)
                            }
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default StudyRoutePage