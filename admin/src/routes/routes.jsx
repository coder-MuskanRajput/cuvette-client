import AuthRoute from "../components/AuthRoute";
import NotFound from "../components/ui/NotFound";
import AuthenticationForm from "../pages/AuthenticationForm";
import Dashboard from "../pages/Dashboard";
import InterviewForm from "../pages/InterviewForm";


const routes = [
    {
        path:'/',
        component:AuthRoute(Dashboard)
    },
    {
        path:'/login',
        component:AuthenticationForm
    },
    {
        path:'/create-interview',
        component:AuthRoute(InterviewForm)
    },
    {
        path:'*',
        component:NotFound
    }
]

export default routes