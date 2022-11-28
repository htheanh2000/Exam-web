import SearchBox from "../searchbox"
import style from './style.module.scss'
import IBanner from '../../assets/images/banner.png'
import Image from "next/image"
import ISubject from '../../assets/images/subject.png'
import Router, { useRouter } from "next/router"
import Link from "next/link"
import { useEffect, useState } from "react"
import { collection, DocumentData, getDocs } from "firebase/firestore"
import { db } from "../../firebase/clientApp"
import Button from "../button"

const tableTitles = ['Tên lớp học', 'Mã lớp học', 'Số sinh viên']
const widthConfig = [40, 30, 30]

const ClassPage = () => {
    const [classes, setClasses] = useState<DocumentData[]>([])
    const route = useRouter()
    useEffect(() => {
        getClasses()
    }, [])

    const getClasses = async () => {
        console.log("get classes");
        const querySnapshot = await getDocs(collection(db, "class"));
        let arr: DocumentData[] = []
        querySnapshot.forEach((doc) => {
               const data = {
                id: doc.id,
                data: doc.data()
               }
            arr.push(data)
        });
        console.log(arr);
        setClasses(arr)

    }

    return (
        <div className={style.container}>
            <div className={style.mainpage}>
                <div className={style.header}>
                    <div>
                        <h6>Hi The Anh</h6>
                        <h2>Danh sách lớp học 🎉</h2>
                    </div>
                    <div className={style.searchBox}>
                        <SearchBox />
                    </div>
                </div>
                {/* Banner */}
                <div className={style.banner}>
                    <div className={style.content}>
                        <h3>Danh sách lớp học</h3>
                    </div>
                    <div className={style.bgImg}>
                        <Image src={IBanner} />
                    </div>
                </div>

                {/* List */}
                <div className={style.examList}>
                    <div className={style.table}>
                        <div className={style.header}>
                            {tableTitles.map((title, index) =>
                                <p key={title} style={{ width: widthConfig[index] + '%' }}> {title}</p>
                            )}
                        </div>
                        <div className={style.rowWrapper}>
                            {classes.map((item, index) =>
                                <Link href={`lop-hoc/${item.id}`}>
                                    <div key={index} className={style.row} >
                                        <div className={style.title} style={{ width: widthConfig[0] + '%' }}>
                                            <Image src={ISubject} />
                                            <div className={style.content}>
                                                <p className="caption1">{item.data.name}</p>
                                            </div>
                                        </div>
                                        <p style={{ width: widthConfig[1] + '%' }}>{item.data.id}</p>
                                        <p style={{ width: widthConfig[2] + '%' }}>{item.data.students}</p>
                                    </div>
                                </Link>)}
                        </div>
                    </div>
                </div>
                <Link href={'/tao-lop-hoc'} >
                    <a>
                        <Button className='my-5' type="secondary" >Tạo lớp học</Button>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default ClassPage