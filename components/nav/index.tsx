import Logo from "../logo"
import Icon from "../icon"
import Button from "../button"
import style from './style.module.scss'
import cn from "classnames"
import Link from "next/link"
const NavBar = () => {
    return (
        <div className={cn(style.nav, 'container')}>
            <Icon name="bugger" />
            <Logo />
            <Link href={'/dang-nhap'}>
                <a>
                    <Button size='sm' type='secondary'>Đăng nhập</Button>
                </a>
            </Link>
        </div>
    )
}

export default NavBar