import Logo from "../logo"
import Icon from "../icon"
import Button from "../button"
import style from './style.module.scss'
import cn from "classnames"
const NavBar = () => {
    return (
        <div className={cn(style.nav, 'container')}>
            <Icon name="bugger"/>
            <Logo/>
            <Button size='sm' type='secondary'>Đăng nhập</Button>
        </div>
    )
}

export default NavBar