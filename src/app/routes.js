import Home from '../features/Booking/Home'
import Detail from '../features/Booking/Detail'
import Seats from '../features/Booking/Seats'
import Signin from '../features/Auth/Signin'
import Signup from '../features/Auth/Signup'
import Profile from '../features/Auth/Profile'
import DashBoard from '../features/Admin/DashBoard'
import User from '../features/Admin/User'
import Films from '../features/Admin/Films'
import Showtimes from '../features/Admin/Showtimes'
import Addnew from '../features/Admin/Addnew'
import Edit from '../features/Admin/Edit'
import Adduser from '../features/Admin/User/Adduser'
import Edituser from '../features/Admin/User/Edituser'
export const routes = [
    { path: '/', component: Home, isPrivate: 0, redirectPath: '/signin' },
    { path: '/detail/:id', component: Detail },
    { path: '/seats/:id', component: Seats },
    { path: '/signin', component: Signin, isAuth: true, redirectPath: '/' },
    { path: '/signup', component: Signup },
    { path: '/profile', component: Profile },
    { path: '/admin', component: DashBoard, isAdmin: true, redirectPath: '/' },
    { path: '/admin/user', component: User, isAdmin: true, redirectPath: '/' },
    { path: '/admin/films', component: Films, isAdmin: true, redirectPath: '/' },
    { path: '/admin/films/addnew', component: Addnew, isAdmin: true, redirectPath: '/' },
    { path: '/admin/films/edit/:id', component: Edit, isAdmin: true, redirectPath: '/' },
    { path: '/admin/showtimes/:id', component: Showtimes, isAdmin: true, redirectPath: '/' },
    {path:  '/admin/user/addnew', component: Adduser, isAdmin: true, redirectPath: '/'},
    {path:  '/admin/user/edit/:id/:GP', component: Edituser, isAdmin: true, redirectPath: '/'}
]