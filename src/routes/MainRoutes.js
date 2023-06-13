/* eslint-disable no-unused-vars */
import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import { redirect } from 'react-router-dom';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// user routing
const UsersList = Loadable(lazy(() => import('../views/users/Userlist')));
const UserForm = Loadable(lazy(() => import('../views/users/UserForm')));

//product routing
const ProductTable = Loadable(lazy(() => import('../views/product/ProductTable')));
const ProductDetail = Loadable(lazy(() => import('../views/product/ProductDetail')));
const ProductEdit = Loadable(lazy(() => import('../views/product/productEdit')));
const ProductCheckout = Loadable(lazy(() => import('../views/product/Checkout')));

//post routing
const PostList = Loadable(lazy(() => import('../views/post/Postlist')));
const PostEdit = Loadable(lazy(() => import('../views/post/PostEdit')));
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    // path: '/',
    // element: <MinimalLayout />,
    // children: [
    //     {
    //         path: '/',
    //         element: <AuthLogin3 />
    //     }
    // ],
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'users',
            children: [
                {
                    path: 'user-list',
                    element: <UsersList />
                }
            ]
        },
        {
            path: 'users',
            children: [
                {
                    path: 'user-form',
                    element: <UserForm />
                }
            ]
        },
        {
            path: 'product',
            children: [
                {
                    path: 'product-list',
                    element: <ProductTable />
                }
            ]
        },
        {
            path: 'product',
            children: [
                {
                    path: 'product-add',
                    element: <ProductEdit />
                }
            ]
        },
        {
            path: 'product',
            children: [
                {
                    path: 'product-detail',
                    element: <ProductDetail />
                }
            ]
        },
        {
            path: 'product',
            children: [
                {
                    path: 'product-cart',
                    element: <ProductCheckout />
                }
            ]
        },
        {
            path: 'posts',
            children: [
                {
                    path: 'post-card',
                    element: <PostList />
                }
            ]
        },
        {
            path: 'posts',
            children: [
                {
                    path: 'post-add',
                    element: <PostEdit />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
