import Logo from "../logo"
import style from './style.module.scss';
import cn from 'classnames';
import { adminTools } from './data'
import Icon from "../icon";
import Link from "next/link";
const NavSideBar = () => {
    return (
        <div className={style.container}>
            <div className={style.logo}><Logo /></div>
            <div className={style.admin}>
                <p className={cn('caption2', style.caption)}>Admin tools</p>
                {
                    adminTools.map(tool =>
                     <Link href={tool.url}>
                        <div className={cn(style.tab, 'menu14', { [style.selected]: tool.url === 'tong-quan' })}>
                            <div className={style.icon}><Icon size="sm" name={tool.icon} /></div>
                            <p>{tool.name}</p>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    )
}

export default NavSideBar