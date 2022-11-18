import NavSideBar from "../nav-sidebar"
import SearchBox from "../searchbox"
import style from './style.module.scss'
import IBanner from '../../assets/images/banner.png'
import Image from "next/image"
const ExamGatewayPage = () => {
    return (
        <div className={style.container}>
            <NavSideBar />
            <div className={style.mainpage}>
                <div className={style.header}>
                    <div>
                        <h6>Hi The Anh</h6>
                        <h2>Đề thi thử 🎉</h2>
                    </div>
                    <div className={style.searchBox}>
                        <SearchBox />
                    </div>
                </div>
                {/* Banner */}
                <div className={style.banner}>
                    <div className={style.content}>
                        <h3>Đề thi thử</h3>
                        <p>Tham gia luyện tập và kiếm sao nhé</p>
                    </div>
                    <div className={style.bgImg}>
                        <Image src={IBanner}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ExamGatewayPage