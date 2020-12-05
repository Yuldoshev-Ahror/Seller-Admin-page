import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AdminTopNavigation from '../Containers/AdminTopNavigation';
import AdminLeftNavigation from '../Containers/AdminLeftNavigation';
import { useSelector } from 'react-redux';
import { adminLoginSuccessMine } from '../Redux/adminLogin/adminLoginSelector';

const AdminProtectedRoute = ({ component: Component, ...rest }) => {
  const admintToken = localStorage.getItem('seller_token');
  const successLogin = useSelector(adminLoginSuccessMine);

  return (
    <Route
      {...rest}
      render={(props) =>
        admintToken || successLogin ? (
          <div className='my-acontainer'>
            <div>
              <AdminLeftNavigation />
            </div>
            <div className='my-acontent'>
              <div>
                <AdminTopNavigation />
              </div>
              <div className='center-ah-con'>
                <Component {...props} />
              </div>
            </div>
          </div>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default AdminProtectedRoute;

// export default function AdminProtectedRoute({ component: Component, ...rest }) {
//   return (
//     <React.Fragment>
//       <Switch>
//         <Route path='/dashboard' component={Dashboard} />
//         <Route path='/helpdesk' component={Helpdesk} />
//         <Route path='/product' component={Product} />
//         <Route path='/invoices' component={Invoices} />
//       </Switch>
//     </React.Fragment>
//   );
// }
