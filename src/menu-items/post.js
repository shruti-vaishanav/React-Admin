/* eslint-disable prettier/prettier */
import { IconPlus, IconCards } from '@tabler/icons';

// constant
const icons = { IconPlus, IconCards };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const post = {
    id: 'posts',
    title: 'Posts',
    // caption: 'post',
    type: 'group',
    children: [
        {
            id: 'post-card',
            title: 'Posts',
            type: 'item',
            url: '/posts/post-card',
            icon: icons.IconCards,
            breadcrumbs: false,
        },
        {
            id: 'post-add',
            title: 'Post Add ',
            type: 'item',
            url: '/posts/post-add',
            icon: icons.IconPlus,
            breadcrumbs: false,
        }
    ]

};

export default post;