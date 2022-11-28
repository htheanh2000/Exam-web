import SearchBox from "../searchbox"
import style from './style.module.scss'
import IBanner from '../../assets/images/banner.png'
import Image from "next/image"
import ISubject from '../../assets/images/subject.png'
import Router, { useRouter } from "next/router"
import Link from "next/link"
import Button from "../button"
import { useEffect, useState } from "react"
import { collection, doc, DocumentData, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/clientApp"

const tableTitles = ['Tên sinh viên', 'Mã số sinh viên', 'Số buổi vắng', 'Điểm danh']
const widthConfig = [25, 25, 25, 25]

const ExamGatewayPage = () => {
    const route = useRouter()
    const [students, setStudents] = useState<DocumentData[]>([])
    const [classData, setClassData] = useState<DocumentData>({})
    useEffect(() => {
        getClassInfo()
        getStudents()
    }, [])

    const getClassInfo = async () => {
        const docSnap = await getDoc(doc(db, "class" , `${route.query.id}`));
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setClassData(docSnap.data())
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        
    }

    const getStudents = async () => {
        console.log("get student");
        const querySnapshot = await getDocs(collection(db, "class", `${route.query.id}/students`));
        let arr: DocumentData[] = []
        querySnapshot.forEach((doc) => {
            doc.data() && arr.push(doc.data())
        });
        console.log(arr);
        setStudents(arr)
    }
    return (
        <div className={style.container}>
            <div className={style.mainpage}>
                <div className={style.header}>
                    <div>
                        <h6>Hi The Anh</h6>
                        <h2>{classData.id} 🎉</h2>
                    </div>
                    <div className={style.searchBox}>
                        <SearchBox />
                    </div>
                </div>
                {/* Banner */}
                <div className={style.banner}>
                    <div className={style.content}>
                        <h3>{classData.name}</h3>
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
                            {students.map((item, index) =>
                                <Link href={`/lop-hoc/${route.query.id}/tao-sinh-vien`}>
                                    <div key={index} className={style.row} >
                                        <div className={style.title} style={{ width: widthConfig[0] + '%' }}>
                                            <Image src={ISubject} />
                                            <div className={style.content}>
                                                <p className="caption1">{item.name}</p>
                                            </div>
                                        </div>
                                        <p style={{ width: widthConfig[1] + '%' }}>{item.id}</p>
                                        <p style={{ width: widthConfig[2] + '%' }}>{item.number}</p>
                                        <p style={{ width: widthConfig[3] + '%' }} className='text-red-600'>{item.status}</p>
                                    </div>
                                </Link>)}
                        </div>
                    </div>
                </div>
                <Link href={`/lop-hoc/${route.query.id}/tao-sinh-vien`}>
                    <a>
                        <Button className="my-4">Thêm sinh viên</Button>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default ExamGatewayPage