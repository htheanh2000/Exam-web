import Image from 'next/image'
import bugger from '../../assets/icons/bugger.svg'
import heart from '../../assets/icons/heart.svg'
import search from '../../assets/icons/search.svg'
import discord from '../../assets/icons/discord.svg'
import twitter from '../../assets/icons/twitter.svg'
import instagram from '../../assets/icons/instagram.svg'
import telegram from '../../assets/icons/telegram.svg'
import facebook from '../../assets/icons/facebook.svg'
import styles from "./style.module.scss"
import { type } from 'os'


type Props = {
    name: IconName;
    size?: keyof typeof IconSize
};

type IconName = keyof typeof icons ;

const icons = {
    bugger: bugger,
    search: search,
    heart: heart,
    discord: discord,
    twitter: twitter,
    telegram: telegram,
    facebook: facebook,
    instagram: instagram
}

const IconSize = {
    'sm': 24,
    'md': 32,
    'lg': 40
}

const Icon = (props: Props) => {
    const { name, size = 'md' } = props
    return (
        <div>
            <Image
                src={icons[name]}
                className={styles.icon}
                alt={`Icon ${name}`}
                width={IconSize[size]}
                height={IconSize[size]}
                priority
            />
        </div>
    )
}
export type {IconName}

export default Icon