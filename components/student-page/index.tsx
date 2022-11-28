import NavSideBar from "../nav-sidebar"
import Avatar from '../../assets/images/avatar.png'
import Image from 'next/image'
import Button from "../button"
import { FormEvent, useEffect, useRef, useState } from "react"
import { collection, doc, DocumentData, getDocs, setDoc } from "firebase/firestore"
import { db } from "../../firebase/clientApp"
import router from "next/router"

const SettingPage = () => {
    const fileRef = useRef<HTMLInputElement>(null)
    const [avatar, setAvatar] = useState<any>()
    const nameRef = useRef<HTMLInputElement>(null)
    const idRef = useRef<HTMLInputElement>(null)
    
    const formdata = [
        {
            label: 'Tên sinh viên',
            value: 'Huỳnh Thế Anh',
            ref: nameRef
        },
        {
            label: 'MSSV',
            value: '18520448',
            ref: idRef
        }
    ]

    const upload = () => {
        console.log(fileRef.current?.click());
    }
    const onChangeAvatar = (e: FormEvent<HTMLInputElement>) => {
        const files = fileRef.current?.files;

        if (files) {
            setAvatar(URL.createObjectURL(files[0]))

        }
    }

    const createSudent = async () => {
        const name = nameRef.current?.value 
        const id = idRef.current?.value 
        if(!name || !id) return
        await setDoc(doc(db, `class/${router.query.id}/students`, id), {
            name,id
          });
        router.push('/lop-hoc/' + router.query.id)
    }

    return (
        <div className="bg-white flex">
            <div className="p-12">
                <h3>Thêm sinh viên</h3>
                <div className="mt-12 border-b-2 pb-8">
                    <p className="caption2">Ảnh đại diện</p>
                    <div className="mt-8 flex items-center">
                        <Image objectFit="cover" className="bg-[#FFCE73] w-fit rounded-full " width={100} height={100} src={avatar || Avatar} />
                        <div className="ml-10">
                            <input ref={fileRef} onChange={onChangeAvatar} className="hidden" type="file" id="myFile" name="filename" />
                            <div onClick={upload} className="text-white mb-1 bg-[#6C5DD3] w-fit px-6 py-2 rounded-full font-semibold cursor-pointer">Thêm ảnh đại diện</div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex flex-wrap">
                    {formdata.map(item =>
                        <div className="mr-12 mb-8">
                            <p className="mb-2 caption2">{item.label}</p>
                            <input ref={item.ref} className="rounded-lg p-4 w-96 font-medium bg-[#dacbcb30] focus:outline outline-offset-2 outline-2  focus:outline-[#6C5DD3]"
                                placeholder={item.label} ></input>
                        </div>)}
                </div>
                <Button type="secondary" onClick={createSudent}>Tạo học sinh</Button>
            </div>
        </div>
    )
}

export default SettingPage