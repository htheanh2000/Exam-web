import NavSideBar from "../nav-sidebar"
import Avatar from '../../assets/images/avatar.png'
import Image from 'next/image'
import Button from "../button"
import { FormEvent, useRef, useState } from "react"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"
import { db } from "../../firebase/clientApp"
import { useRouter } from 'next/router'

const SettingPage = () => {
    const router = useRouter()
    const nameRef = useRef<HTMLInputElement>(null)
    const idRef = useRef<HTMLInputElement>(null)
    const formdata = [
        {
            label: 'Tên lớp học',
            ref : nameRef
        },
        {
            label: 'Mã lớp học',
            ref: idRef
        }
    ]

    const createClass = async () => {
        const name = nameRef.current?.value 
        const id = idRef.current?.value 
        if(!name || !id) return
        await setDoc(doc(db, "class", id), {
            name,id
          });
        router.push('/lop-hoc/' + id)
    } 

    return (
        <div className="bg-white flex">
            <div className="p-12">
                <h3>Tạo lớp học</h3>
                <div className="mt-8 flex flex-wrap">
                    {formdata.map(item =>
                        <div className="mr-12 mb-8">
                            <p className="mb-2 caption2">{item.label}</p>
                            <input ref={item.ref}  className="rounded-lg p-4 w-96 font-medium bg-[#dacbcb30] focus:outline outline-offset-2 outline-2  focus:outline-[#6C5DD3]"
                                placeholder={item.label} ></input>
                        </div>)}
                </div>
                <Button type="secondary" onClick={createClass}>Tạo lớp học</Button>
            </div>
        </div>
    )
}

export default SettingPage

