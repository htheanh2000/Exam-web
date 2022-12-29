import SearchBox from "../searchbox"
import style from './style.module.scss'
import IBanner from '../../assets/images/banner.png'
import Image from "next/image"
import ISubject from '../../assets/images/subject.png'
import Router, { useRouter } from "next/router"
import Link from "next/link"
import Button from "../button"
import { useEffect, useState } from "react"
import { collection, doc, DocumentData, getDoc, getDocs, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/clientApp"
import { getApp } from "firebase/app"
import { getDownloadURL, getStorage, ref } from "firebase/storage"
import Switch from "react-switch";
import router from "next/router"

const tableTitles = ["Ảnh Đại diện", 'Tên sinh viên', 'Mã số sinh viên', 'Điểm danh']
const widthConfig = [25, 25, 25, 25]

const ExamGatewayPage = () => {
    const firebaseApp = getApp();
    const storage = getStorage(firebaseApp, "gs://exam-web-b19d1.appspot.com/");
    const today = new Date().toLocaleDateString("en-GB") 
    console.log(new Date().toLocaleDateString("en-GB")    );
    const user = auth.currentUser
    const route = useRouter()
    const [students, setStudents] = useState<DocumentData[]>([])
    const [classData, setClassData] = useState<DocumentData>({})
    useEffect(() => {
        getClassInfo()
        getStudents()
    }, [])

    const getAvatar = async (name: string) => {
        if (!name) return null
        return await getDownloadURL(ref(storage, name))
    }

    const getClassInfo = async () => {
        const docSnap = await getDoc(doc(db, "class", `${route.query.id}`));
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setClassData(docSnap.data())
        } else {
            console.log("No such document!");
        }
    }

    const getStudents = async () => {
        const querySnapshot = await getDocs(collection(db, "class", `${route.query.id}/students`));
        let arr: DocumentData[] = []
        querySnapshot.forEach((doc) => {
            if (doc.data()) {
                arr.push(doc.data())
            }
        });
        const students = []
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            const url = await getAvatar(element.url)
            students.push({
                ...element,
                url
            })
        }
        console.log('students', students);
        setStudents(students)
    }

    const diemdanh = (index: any) => {
        console.log("index", index);
        const arr = [...students]
        console.log("arr[index].diemdanh", arr[index].diemdanh);
        if(!arr[index].diemdanh) {
            arr[index].diemdanh = {
                [today]: true
            }
        }
        else {
            arr[index].diemdanh[today] = !arr[index].diemdanh[today]
        }
        console.log(arr[0]);
        setStudents([...arr])
        setDoc(doc(db, `class/${router.query.id}/students`, arr[index].id), arr[index]);
    }

   
    return (
        <div className={style.container}>
            <div className={style.mainpage}>
                <div className={style.header}>
                    <div>
                    <h6>Hi {user?.displayName}</h6>
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
                <div className="flex justify-between">
                    <Link href={`/diem-danh/${route.query.id}/`}>
                        <a>
                            <Button className="my-4">Điểm danh tự động</Button>

                        </a>
                    </Link>

                    <Link href={`/lop-hoc/${route.query.id}/tao-sinh-vien`}>
                        <a>
                            <Button className="my-4">Thêm sinh viên</Button>
                        </a>
                    </Link>
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
                                <div>
                                    <div key={index} className={style.row} >
                                        <div className={style.title} style={{ width: widthConfig[0] + '%' }}>
                                            <Image objectFit="cover" className="rounded" width={100} height={100} src={item.url || ISubject} alt="" />
                                        </div>
                                         <p style={{ width: widthConfig[1] + '%' }} className="caption1">{item.name}</p>
                                        <p style={{ width: widthConfig[2] + '%' }}>{item.id}</p>
                                        <Switch onChange={() => { diemdanh(index) }} checked={item.diemdanh ? item.diemdanh[today] : false} />
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ExamGatewayPage

