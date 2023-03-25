import { IconType } from 'react-icons/lib';
import {
    FiBook,
    FiHome,
    FiUser,
    FiMessageSquare,
} from 'react-icons/fi';

export interface ISection {
    key: string,
    id: string,
    position: number,
    icon: IconType
}

export const sections: Array<ISection> = [
    {
        key: 'secH',
        id: 'home',
        position: 0,
        icon: FiHome,
    },
    {
        key: 'secA',
        id: 'about',
        position: 0,
        icon: FiUser,
    },
    {
        key: 'secP',
        id: 'portfolio',
        position: 0,
        icon: FiBook,
    },
    {
        key: 'secC',
        id: 'contacts',
        position: 0,
        icon: FiMessageSquare,
    },
];