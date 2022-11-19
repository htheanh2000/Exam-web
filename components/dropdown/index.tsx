import { useRef, useState } from "react"
import useOnClickOutside from "../../hook/useOnClickOutside"
import Icon from "../icon"
import style from './style.module.scss'
type Props = {
    data: Data[]
}

type Data = {
    label: string,
    value: string
}

const Dropdown = (props: Props) => {
    const { data } = props
    const ref = useRef<any>();
    const [isOpen, setIsOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState<Data>(data[0])
    useOnClickOutside(ref, () => setIsOpen(false));
    return (
        <div className={style.dropdown} ref={ref}>
            <div >
                <div className={style.header} onClick={() => setIsOpen(!isOpen)}>
                    <p className="menu14">{selectedItem.label}</p>
                    <Icon name='down' size="sx" />
                </div>

            </div>
            <div className={style.content}>
                {
                    isOpen && data.map(item =>
                        <div className={style.item} onClick={() => { setSelectedItem(item); setIsOpen(false) }}>
                            {item.label}
                        </div>)
                }
            </div>
        </div>
    )
}

export default Dropdown