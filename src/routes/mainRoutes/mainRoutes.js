import React from 'react';

export const guestRoutes = [
  {
    exact: true,
    path: '/',
    component: React.lazy(() => import('../../views/Dashboard/Dashboard')),
    name: 'Dashboard'
  },
  {
    exact: true,
    path: '/faqs',
    component: React.lazy(() => import('../../views/FAQs/FAQs')),
    name: 'FAQS'
  },
  {
    exact: true,
    path: '/user-profile',
    component: React.lazy(() => import('../../views/UserProfile')),
    name: 'Profile'
  },
  {
    exact: true,
    path: '/whitepaper',
    component: React.lazy(() => import('../../views/WhitePaper/WhitePaper')),
    name: 'White Paper'
  },
  {
    exact: true,
    path: '/wine-detail',
    component: React.lazy(() => import('../../views/WineDetail/WineDetail')),
    name: 'WineDetail'
  },
  {
    exact: true,
    path: "/cellarslist",
    component: React.lazy(() => import("../../views/CellarsList/CellarsList")),
    name: "cellarslist",
  },
  {
    exact: true,
    path: "/landing",
    component: React.lazy(() => import("../../views/Landing/Landing")),
    name: "landing",
  },
  // Main route's default dashboard
  {
    redirectRoute: true,
    name: 'dashboardRedirect',
    path: '/'
  }
];

export const userRoutes = [
  {
    exact: true,
    path: '/',
    component: React.lazy(() => import('../../views/Dashboard/Dashboard')),
    name: 'Dashboard'
  },
  {
    exact: true,
    path: '/user-profile',
    component: React.lazy(() => import('../../views/UserProfile')),
    name: 'Profile'
  },
  {
    path: '/collections',
    exact: true,
    name: 'Collections',
    component: React.lazy(() => import('../../views/Collections/Collection'))
  },
  {
    exact: true,
    path: '/wine-detail',
    component: React.lazy(() => import('../../views/WineDetail/WineDetail')),
    name: 'WineDetail'
  },
  {
    exact: true,
    path: '/faqs',
    component: React.lazy(() => import('../../views/FAQs/FAQs')),
    name: 'FAQS'
  },
  {
    exact: true,
    path: '/whitepaper',
    component: React.lazy(() => import('../../views/WhitePaper/WhitePaper')),
    name: 'White Paper'
  },
  {
    exact: true,
    path: "/cellarslist",
    component: React.lazy(() => import("../../views/CellarsList/CellarsList")),
    name: "cellarslist",
  },
  {
    exact: true,
    path: "/landing",
    component: React.lazy(() => import("../../views/Landing/Landing")),
    name: "landing",
  },
  // Main route's default dashboard
  {
    redirectRoute: true,
    name: 'dashboardRedirect',
    path: '/'
  }
];
