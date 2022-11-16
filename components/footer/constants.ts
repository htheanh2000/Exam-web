
import { IconName } from '../icon'

type Social = {
    name: IconName,
    url: string
}

const SOCIALS: Social[] = [
    {
        name: 'discord',
        url: '#',
    },
    {
        name: 'twitter',
        url: '#',
    },
    {
        name: 'instagram',
        url: '#',
    },
    {
        name: 'telegram',
        url: '#',
    },
    {
        name: 'facebook',
        url: '#',
    }
]

const FOOTERS = [
    {
        name: 'game play',
        url: '#'
    },
    {
        name: 'roadmap',
        url: '#'
    },
    {
        name: 'feature & benefits',
        url: '#'
    },
    {
        name: 'marketplace',
        url: '#'
    },

]

const FOOTERS_POLICY = [
    {
        name: 'Privacy policy',
        url: '#'
    },
    {
        name: 'Terms of services',
        url: '#'
    }
]

export {FOOTERS, SOCIALS, FOOTERS_POLICY}