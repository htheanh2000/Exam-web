import NavSideBar from "../nav-sidebar"
import SearchBox from "../searchbox"
import style from './style.module.scss'
import IBanner from '../../assets/images/banner.png'
import Image from "next/image"
import Dropdown from "../dropdown"
import ISubject from '../../assets/images/subject.png'
const options = [
    {
        value: 'month',
        label: 'Tháng này'
    },
    {
        value: 'week',
        label: 'Tuần này'
    },
    {
        value: 'day',
        label: 'Hôm nay'
    }
]

const tableTitles = ['Đề thi thử', 'Môn thi', 'Thủ Khoa', 'Điểm cao nhất', 'Điểm trung bình']
const widthConfig = [30, 10, 10, 15, 15]
const tableData = [
    {
        name: 'Chuyên Nam Định',
        subject: 'Tiếng Anh',
        top: 'Thanh Như',
        highestScore: 9.75,
        averageScore: '8.0',
        totalSubmit: 45
    },
    {
        name: 'Chuyên Nam Định',
        subject: 'Tiếng Anh',
        top: 'Thanh Như',
        highestScore: 9.75,
        averageScore: '8.0',
        totalSubmit: 45
    },
    {
        name: 'Chuyên Nam Định',
        subject: 'Tiếng Anh',
        top: 'Thanh Như',
        highestScore: 9.75,
        averageScore: '8.0',
        totalSubmit: 45
    }
]
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
                        <Image src={IBanner} />
                    </div>
                </div>

                {/* List */}
                <div className={style.examList}>
                    <div>
                        <Dropdown data={options} />
                    </div>
                    <div className={style.table}>
                        <div className={style.header}>
                            {tableTitles.map((title, index) =>
                                <p key={title} style={{ width: widthConfig[index] + '%' }}> {title}</p>
                            )}
                        </div>
                        <div className={style.rowWrapper}>
                            {tableData.map((item, index) => 
                            <div key={index} className={style.row}>
                                <div className={style.title} style={{ width: widthConfig[0] + '%' }}>
                                    <Image src={ISubject} />
                                    <div className={style.content}>
                                        <p className="title">Đề thi thử</p>
                                        <p className="caption1">{item.name}</p>
                                    </div>
                                </div>
                                <p style={{ width: widthConfig[1] + '%' }}>{item.subject}</p>
                                <p style={{ width: widthConfig[2] + '%' }}>{item.top}</p>
                                <p style={{ width: widthConfig[3] + '%' , color: '#5F75EE'}}>{item.highestScore}</p>
                                <p style={{ width: widthConfig[4] + '%' }}><span style={{color: '#7FBA7A'}}>{item.averageScore} </span>(Thí sinh: {item.totalSubmit})</p>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExamGatewayPage