import cn from "classnames";
import NavSideBar from "../nav-sidebar"
import style from './style.module.scss';
import Button from "../button";
const OverviewPage = () => {
    return (
        <div className={style.container}>
            <NavSideBar />
            <div className={style.mainpage}>
                <div>
                    <h6>Hi The Anh</h6>
                    <h2>Tổng Quan 👋</h2>
                </div>
                <div className={style.card}>
                    <h5>Vật lý</h5>
                    <p className="body1">Điểm trung bình 10 bài kiểm tra gần đầy của bạn là:</p>
                    <p className={cn('display-d2', style.mark)}>8.5</p>
                    <p className="body1">Mục tiêu của bạn là 9 điểm</p>
                        <Button className={style.btn}>Luyện tập</Button>
                </div>
            </div>
        </div>
    )
}

export default OverviewPage