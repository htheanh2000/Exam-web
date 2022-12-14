import Logo from "../logo"
import style from './style.module.scss'
import Image from "next/image"
import heroImg from '../../assets/images/characters/image-2.png'
import Button from "../button"
import Link from "next/link"
import { useRouter } from 'next/router'
import { auth } from '../../firebase/clientApp'
import { signInWithEmailAndPassword } from "firebase/auth"
import { useEffect, useRef, useState } from "react"

const SignInPage = () => {
    const router = useRouter()
    const [err, setErr] = useState('')
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        console.log('auth',auth.currentUser);
    },[])
    const signin = () => {
        setErr('')
        const email = emailRef.current?.value || ''
        const password = passwordRef.current?.value || ''
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                router.push('/tong-quan')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                setErr(errorMessage)
                return
                switch (errorCode) {
                    case 'auth/invalid-email':
                        setErr('Invalid email address')
                        break;
                    case 'auth/invalid-password':
                        setErr('Invalid password')
                        break;
                    case 'auth/user-not-found':
                        setErr('User not found')
                    default:
                        break;
                }
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
                    <h2>????ng nh???p</h2>
                    <div className={style.row}>
                        <label htmlFor="name">Email ho???c s??? ??i???n tho???i c???a b???n l?? ?</label>
                        <input ref={emailRef} placeholder="Nh???p email ho???c s??? ??i???n tho???i c???a b???n" type="text" />
                    </div>
                    <div className={style.row}>
                        <label htmlFor="name">Nh???p m???t kh???u ?</label>
                        <input ref={passwordRef} placeholder="Nh???p m???t kh???u" type="password" />
                    </div>


                    <div className="" onClick={signin}>
                        <Button className={style.signinBtn}> ????ng nh???p</Button>
                    </div>
                    <span>{err}</span>

                    <p>Ch??a c?? t??i kho???n ?
                        <Link href={"/dang-ki"}>
                            <strong > ????ng k?? ngay</strong>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default SignInPage