/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AdminRouteImport } from './routes/admin/route'
import { Route as HomeRouteImport } from './routes/_home.route'
import { Route as AdminIndexImport } from './routes/admin/index'
import { Route as HomeIndexImport } from './routes/_home.index'
import { Route as HomeAboutImport } from './routes/_home.about'
import { Route as AdminTableIndexImport } from './routes/admin/$table/index'

// Create/Update Routes

const AdminRouteRoute = AdminRouteImport.update({
  path: '/admin',
  getParentRoute: () => rootRoute,
} as any)

const HomeRouteRoute = HomeRouteImport.update({
  id: '/_home',
  getParentRoute: () => rootRoute,
} as any)

const AdminIndexRoute = AdminIndexImport.update({
  path: '/',
  getParentRoute: () => AdminRouteRoute,
} as any)

const HomeIndexRoute = HomeIndexImport.update({
  path: '/',
  getParentRoute: () => HomeRouteRoute,
} as any)

const HomeAboutRoute = HomeAboutImport.update({
  path: '/about',
  getParentRoute: () => HomeRouteRoute,
} as any)

const AdminTableIndexRoute = AdminTableIndexImport.update({
  path: '/$table/',
  getParentRoute: () => AdminRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_home': {
      id: '/_home'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof HomeRouteImport
      parentRoute: typeof rootRoute
    }
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminRouteImport
      parentRoute: typeof rootRoute
    }
    '/_home/about': {
      id: '/_home/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof HomeAboutImport
      parentRoute: typeof HomeRouteImport
    }
    '/_home/': {
      id: '/_home/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof HomeIndexImport
      parentRoute: typeof HomeRouteImport
    }
    '/admin/': {
      id: '/admin/'
      path: '/'
      fullPath: '/admin/'
      preLoaderRoute: typeof AdminIndexImport
      parentRoute: typeof AdminRouteImport
    }
    '/admin/$table/': {
      id: '/admin/$table/'
      path: '/$table'
      fullPath: '/admin/$table'
      preLoaderRoute: typeof AdminTableIndexImport
      parentRoute: typeof AdminRouteImport
    }
  }
}

// Create and export the route tree

interface HomeRouteRouteChildren {
  HomeAboutRoute: typeof HomeAboutRoute
  HomeIndexRoute: typeof HomeIndexRoute
}

const HomeRouteRouteChildren: HomeRouteRouteChildren = {
  HomeAboutRoute: HomeAboutRoute,
  HomeIndexRoute: HomeIndexRoute,
}

const HomeRouteRouteWithChildren = HomeRouteRoute._addFileChildren(
  HomeRouteRouteChildren,
)

interface AdminRouteRouteChildren {
  AdminIndexRoute: typeof AdminIndexRoute
  AdminTableIndexRoute: typeof AdminTableIndexRoute
}

const AdminRouteRouteChildren: AdminRouteRouteChildren = {
  AdminIndexRoute: AdminIndexRoute,
  AdminTableIndexRoute: AdminTableIndexRoute,
}

const AdminRouteRouteWithChildren = AdminRouteRoute._addFileChildren(
  AdminRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof HomeRouteRouteWithChildren
  '/admin': typeof AdminRouteRouteWithChildren
  '/about': typeof HomeAboutRoute
  '/': typeof HomeIndexRoute
  '/admin/': typeof AdminIndexRoute
  '/admin/$table': typeof AdminTableIndexRoute
}

export interface FileRoutesByTo {
  '/about': typeof HomeAboutRoute
  '/': typeof HomeIndexRoute
  '/admin': typeof AdminIndexRoute
  '/admin/$table': typeof AdminTableIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_home': typeof HomeRouteRouteWithChildren
  '/admin': typeof AdminRouteRouteWithChildren
  '/_home/about': typeof HomeAboutRoute
  '/_home/': typeof HomeIndexRoute
  '/admin/': typeof AdminIndexRoute
  '/admin/$table/': typeof AdminTableIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/admin' | '/about' | '/' | '/admin/' | '/admin/$table'
  fileRoutesByTo: FileRoutesByTo
  to: '/about' | '/' | '/admin' | '/admin/$table'
  id:
    | '__root__'
    | '/_home'
    | '/admin'
    | '/_home/about'
    | '/_home/'
    | '/admin/'
    | '/admin/$table/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  HomeRouteRoute: typeof HomeRouteRouteWithChildren
  AdminRouteRoute: typeof AdminRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  HomeRouteRoute: HomeRouteRouteWithChildren,
  AdminRouteRoute: AdminRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_home",
        "/admin"
      ]
    },
    "/_home": {
      "filePath": "_home.route.tsx",
      "children": [
        "/_home/about",
        "/_home/"
      ]
    },
    "/admin": {
      "filePath": "admin/route.tsx",
      "children": [
        "/admin/",
        "/admin/$table/"
      ]
    },
    "/_home/about": {
      "filePath": "_home.about.tsx",
      "parent": "/_home"
    },
    "/_home/": {
      "filePath": "_home.index.tsx",
      "parent": "/_home"
    },
    "/admin/": {
      "filePath": "admin/index.tsx",
      "parent": "/admin"
    },
    "/admin/$table/": {
      "filePath": "admin/$table/index.tsx",
      "parent": "/admin"
    }
  }
}
ROUTE_MANIFEST_END */
