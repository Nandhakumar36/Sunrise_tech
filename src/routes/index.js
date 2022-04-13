
import { Switch, Router, BrowserRouter } from "react-router-dom"
import Signin from "../Signin"
// import Signup from '../Signup'
import PublicRoute from './publicRoutes'
import PrivateRoute from './privateRoutes'
// import Layout  from "../layout";
import { fetch } from "../services/local-storage"
import Home from '../Home'
function Routes() {
    return (
        <BrowserRouter  >
            

            <Switch >
                <PublicRoute restricted={false} component={Home} exact path="/home"/>
                <PublicRoute restricted={false} component={Signin} path="/" />
                
                {/* <Layout>
                    
                </Layout> */}

            </Switch>
                
        </BrowserRouter>
        
    )
}


export default Routes