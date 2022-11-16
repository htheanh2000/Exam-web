import Logo from "../logo"
import style from './style.module.scss'
import Image from "next/image"
import heroImg from '../../assets/images/characters/image-1.png'
import Button from "../button"
import Link from "next/link"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase/clientApp'
const RegisterPage = () => {
    const register = () => {
        const email = 'htheanh2000@gmail.com';
        const password = 'theanh123';
        console.log("createUserWithEmailAndPassword");
        return
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("user", user);
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
                        <input placeholder="Nhập tên của bạn" type="text" />
                    </div>
                    <div className={style.row}>
                        <label htmlFor="name">Email hoặc số điện thoại của bạn là ?</label>
                        <input placeholder="Nhập email hoặc số điện thoại của bạn" type="text" />
                    </div>
                    <div className={style.row}>
                        <label htmlFor="name">Nhập mật khẩu ?</label>
                        <input placeholder="Nhập mật khẩu" type="password" />
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