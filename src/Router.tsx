import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {HomePage} from 'src/pages/home/HomePage'
import {TodoList} from 'src/pages/todolist/TodoList'
import type {Router as RouterType} from '@remix-run/router'

const router: RouterType = createBrowserRouter([
  {
    Component: HomePage,
    path: '/',
  },
  {
    Component: TodoList,
    path: '/todolist',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
