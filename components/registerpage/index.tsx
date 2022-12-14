import Logo from "../logo"
import style from './style.module.scss'
import Image from "next/image"
import heroImg from '../../assets/images/characters/image-1.png'
import Button from "../button"
import Link from "next/link"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../../firebase/clientApp'
import { useRef } from "react"
import { useRouter } from 'next/router'
const RegisterPage = () => {
    const router = useRouter()
    const emailRef = useRef<HTMLInputElement>()
    const nameRef = useRef<HTMLInputElement>()
    const passwordRef = useRef<HTMLInputElement>()
    const register = () => {
        const email = emailRef.current?.value || ''
        const password = passwordRef.current?.value || ''
        const name = nameRef.current?.value || ''
        console.log("createUserWithEmailAndPassword");

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                 updateProfile(user, { displayName: name }).catch(
                    (err) => console.log(err)
                  );
                console.log("user", user);
                router.push('/tong-quan')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error", errorCode, errorMessage);
                // 
            });
            
    }
    return (
        <div className="">
            <div className={style.wrapper}>
                <div className={style.leftside}>
                    <Logo className={style.logo} />
                    <div className={style.heroImg} >
                        <Image src={heroImg} />
                    </div>
                </div>
                <div className={style.rightside}>
                    <h2>Tạo tài khoản</h2>
                    <div className={style.row}>
                        <label htmlFor="name">Tên của bạn là gì ?</label>
                        <input ref={nameRef} placeholder="Nhập tên của bạn" type="text" />
                    </div>
                    <div className={style.row}>
                        <label htmlFor="name">Email hoặc số điện thoại của bạn là ?</label>
                        <input ref={emailRef} placeholder="Nhập email hoặc số điện thoại của bạn" type="text" />
                    </div>
                    <div className={style.row}>
                        <label htmlFor="name">Nhập mật khẩu ?</label>
                        <input ref={passwordRef} placeholder="Nhập mật khẩu" type="password" />
                    </div>
                    <div className={style.row}>
                        <label htmlFor="name">Nhập lại mật khẩu ?</label>
                        <input placeholder="Nhập lại mật khẩu" type="password" />
                    </div>
                    <Button className={style.signinBtn} onClick={register}> Đăng kí</Button>
                    <p>Đã có tài khoản ?
                        <Link href={"/dang-nhap"}>
                            <strong > Đăng nhập ngay</strong>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}



export default RegisterPage