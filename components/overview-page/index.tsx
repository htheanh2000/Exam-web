import cn from "classnames";
import NavSideBar from "../nav-sidebar"
import style from './style.module.scss';
import Button from "../button";
import Image from "next/image";
import IComp from '../../assets/images/comp.png'
import physics from '../../assets/images/subjects/physics.png'
import math from '../../assets/images/subjects/math.png'
import chemistry from '../../assets/images/subjects/chemistry.png'
import Icon from "../icon";
import SearchBox from "../searchbox";
import { auth } from "../../firebase/clientApp";
const suggestionList = [
    {
        subject: 'Vật lý',
        icon: physics,
        name: "Chuyên Vinh 2022",
        color: '#FFA2C0'
    },
    {
        subject: 'Toán',
        icon: math,
        name: "Chuyên Hà Nam",
        color: '#FFCE73'
    },
    {
        subject: 'Hóa',
        icon: chemistry,
        name: "Nam Định",
        color: '#A0D7E7'
    }
]

const OverviewPage = () => {
    const user = auth.currentUser
    return (
        <div className={style.container}>
            <NavSideBar />
            <div className={style.mainpage}>
                <div>
                    <h6>Hi {user?.displayName}</h6>
                    <h2>Tổng Quan 👋</h2>
                </div>
                <div className={style.flexRow}>
                    <div className={style.card}>
                        <h5>Vật lý</h5>
                        <p className="body1">Điểm trung bình 10 bài kiểm tra gần đầy của bạn là:</p>
                        <p className={cn('display-d2', style.mark)}>8.5</p>
                        <p className="body1">Mục tiêu của bạn là 9 điểm</p>
                        <Button className={style.btn}>Luyện tập</Button>
                        <div className={style.bgImg}>
                            <Image src={IComp} />
                        </div>
                    </div>

                    <div className={style.yourStar}>
                        <h6>Sao của bạn</h6>
                        <p className={cn('display-d2', style.star)}>0</p>
                        <p className={cn('body1', style.caption)}>Làm đề thi để kiếm thêm sao nhé</p>
                        <Button className={style.btn}>Đổi quà</Button>
                    </div>
                </div>

                {/* De thi goi y */}
                <div className={style.suggestion}>
                    <h6>Đề thi gợi ý</h6>
                    {suggestionList.map(item =>
                        <div className={style.exam}>
                            <div className={style.img} style={{ backgroundColor: item.color }}>
                                <Image src={item.icon} />
                            </div>
                            <div>
                                <p className="title">{item.subject}</p>
                                <p className={cn('caption1', style.name)}>{item.name}</p>
                            </div>
                            <div className={style.icon}>
                                <Icon size="sm" name='right' />
                            </div>
                        </div>)}
                </div>

                <div className={style.searchBox}>
                    <SearchBox />
                </div>
            </div>
        </div>
    )
}

export default OverviewPage