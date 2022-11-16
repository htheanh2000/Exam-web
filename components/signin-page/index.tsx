import Logo from "../logo"
import style from './style.module.scss'
import Image from "next/image"
import heroImg from '../../assets/images/characters/image-2.png'
import Button from "../button"
import Link from "next/link"
import { useRouter } from 'next/router'

const SignInPage = () => {
    const router = useRouter()
    const signin = () => {
        router.push('/tong-quan')
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
                    <h2>Đăng nhập</h2>
                    <div className={style.row}>
                        <label htmlFor="name">Email hoặc số điện thoại của bạn là ?</label>
                        <input placeholder="Nhập email hoặc số điện thoại của bạn" type="text" />
                    </div>
                    <div className={style.row}>
                        <label htmlFor="name">Nhập mật khẩu ?</label>
                        <input placeholder="Nhập mật khẩu" type="password" />
                    </div>
                    <div className="" onClick={signin}>
                        <Button className={style.signinBtn}> Đăng nhập</Button>
                    </div>
                    <p>Chưa có tài khoản ?
                        <Link href={"/dang-ki"}>
                            <strong > Đăng kí ngay</strong>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default SignInPage