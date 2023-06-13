/* eslint-disable prettier/prettier */
import { IconForms, IconUser } from '@tabler/icons';

// constant
const icons = { IconForms, IconUser };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const users = {
    id: 'users',
    title: 'Users',
    caption: 'user Detail',
    type: 'group',
    children: [
        {
            id: 'user-list',
            title: 'Users list ',
            type: 'item',
            url: '/users/user-list',
            icon: icons.IconUser,
            breadcrumbs: false,
        },
        {
            id: 'user-form',
            title: 'User form ',
            type: 'item',
            url: '/users/user-Form',
            icon: icons.IconForms,
            breadcrumbs: false,
        }
    ]

};

export default users;