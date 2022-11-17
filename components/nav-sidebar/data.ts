
import { IconName } from "../icon"

type AdminTools = {
    name: string,
    url: string,
    icon: IconName
}
const adminTools :AdminTools[] = [
    {
        name: 'Tổng quan',
        url: 'tong-quan',
        icon: 'activity'
    },
    {
        name: 'Đề thi',
        url: 'de-thi',
        icon: 'bag'
    },
    {
        name: 'Lộ trình học',
        url: 'lo-trinh-hoc',
        icon: 'document'
    },
    {
        name: 'cài đặt',
        url: 'cai-dat',
        icon: 'setting'
    },
]

export  {adminTools}