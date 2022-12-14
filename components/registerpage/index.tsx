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

    const showRegistrationForm = () => {
        const registrationOptions = document.getElementById("registration_options");
        if (registrationOptions != null) registrationOptions.style.display = "none";

        const registrationForm = document.getElementById("registration_form");
        if (registrationForm != null) registrationForm.style.display = "block";
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
                    <div id="registration_options">
                        <h2>Chọn hình thức đăng ký</h2>
                        <Button className={style.signinBtn}>Quét thẻ</Button>
                        <Button className={style.signinBtn} onClick={showRegistrationForm}>Điền tay</Button>
                    </div>
                    <div id="registration_form" style={{ display: "none" }}>
                        <h3>Tạo tài khoản</h3>
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

                        <Link href={"/dang-nhap"}>Tôi đổi ý rồi. Tôi muốn quét thẻ tự động đăng ký.</Link>
                        <Button className={style.signinBtn} onClick={register}> Đăng kí</Button>
                        <p>Đã có tài khoản ?
                            <Link href={"/dang-nhap"}>
                                <strong > Đăng nhập ngay</strong>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default RegisterPage