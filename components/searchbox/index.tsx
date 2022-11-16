import Icon from "../icon"
import styles from "./style.module.scss"
import cn from "classnames"
const SearchBox = () => {
    return (
        <div className={styles.searchWrapper}>
            <Icon size="sm" name='search'/>
            <input className={cn(styles.input, 'base2')} placeholder="Search character, planet, item..."/>
        </div>
    )
}

export default SearchBox