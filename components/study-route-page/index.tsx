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

                <Card>
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

            </div>
        </div>
    )
}

export default StudyRoutePage