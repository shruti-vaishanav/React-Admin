/* eslint-disable prettier/prettier */
import { IconAddressBook, IconPlus, IconShoppingCart, IconShoppingCartPlus } from '@tabler/icons';

// constant
const icons = { IconAddressBook, IconPlus, IconShoppingCart, IconShoppingCartPlus };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const product = {
    id: 'product',
    title: 'Product',
    // caption: 'product Detail',
    type: 'group',
    children: [
        {
            id: 'product-list',
            title: 'Product list ',
            type: 'item',
            url: '/product/product-list',
            icon: icons.IconShoppingCart,
            breadcrumbs: false,
        },
        {
            id: 'product-add',
            title: 'Product Add ',
            type: 'item',
            url: '/product/product-add',
            icon: icons.IconPlus,
            breadcrumbs: false,
        },
        {
            id: 'product-detail',
            title: 'Product detail ',
            type: 'item',
            url: '/product/product-detail',
            icon: icons.IconAddressBook,
            breadcrumbs: false,
        },
        {
            id: 'product-cart',
            title: 'Checkout ',
            type: 'item',
            url: '/product/product-cart',
            icon: icons.IconShoppingCartPlus,
            breadcrumbs: false,
        }
    ]

};

export default product;