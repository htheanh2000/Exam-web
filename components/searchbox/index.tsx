import Icon from "../icon"
import styles from "./style.module.scss"
import Image from 'next/image'
import cn from "classnames"
import INoti from '../../assets/images/noti.png'
const SearchBox = () => {
    return (
        <div className={styles.searchWrapper}>
            <Icon size="sm" name='search'/>
            <input className={cn(styles.input, 'base2')} placeholder="Bạn muốn tìm gì?"/>
            <div className={styles.noti}>
                <Image src={INoti}/>
            </div>
        </div>
    )
}

export default SearchBox