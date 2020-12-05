import React, { useMemo } from 'react';
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  adminLoginBeginMine,
  adminLoginFailMine,
  adminLoginSuccessMine,
} from '../../Redux/adminLogin/adminLoginSelector';
import { adminLogin } from '../../Redux/adminLogin/adminLoginAction';
import Alert from '@material-ui/lab/Alert';
// import {

// } from '../../Redux/adminLogin/adminLoginAction';

export default function Login() {
  const loginPageStyle = {
    margin: '32px auto 37px',
    maxWidth: '530px',
    background: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 10px rgba(0,0,0,0.15)',
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const adminLoginBegin = useSelector(adminLoginBeginMine);
  const adminLoginFail = useSelector(adminLoginFailMine);
  const adminLoginSuccess = useSelector(adminLoginSuccessMine);

  return (
    <Formik
      initialValues={{ email: '', password: '', remember: false }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required('Required'),
        password: Yup.string()
          .required('No password provided.')
          .min(6, 'Password is too short - should be 6 chars minimum.'),
        // .matches(
        //   /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
        //   'Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters'
        // ),
        remember: Yup.string().required('Required'),
      })}
      onSubmit={({ email, password }, { setSubmitting }) => {
        setTimeout(() => {
          // alert(JSON.stringify({ email, password }, null, 2));
          setSubmitting(false);
          dispatch(adminLogin({ email, password }, history));
        }, 400);
      }}
    >
      {(formik) => (
        <div style={loginPageStyle}>
          <form onSubmit={formik.handleSubmit}>
            <h3>Log in</h3>
            {adminLoginFail && (
              <Alert severity='error'>Lgin yoki Parol Xato</Alert>
            )}
            <div className='form-group'>
              <label>Email</label>
              <input
                type='email'
                className='form-control'
                placeholder='Enter email'
                required
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <span className='help-block text-danger'>
                  {formik.errors.email}
                </span>
              )}
            </div>

            <div className='form-group'>
              <label>Password</label>
              <input
                type='password'
                className='form-control'
                placeholder='Enter password'
                name='password'
                required
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password && (
                <span className='help-block text-danger'>
                  {formik.errors.password}
                </span>
              )}
            </div>

            <div className='form-group'>
              <div className='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  name='remember'
                  onChange={formik.handleChange}
                  id='customCheck1'
                />
                <label className='custom-control-label' htmlFor='customCheck1'>
                  Remember me
                </label>
              </div>
            </div>

            <button
              disabled={adminLoginBegin}
              type='submit'
              className='btn btn-dark btn-lg btn-block'
            >
              Sign in
            </button>
            <p className='forgot-password text-right'>
              Forgot <a href='#'>password?</a>
            </p>
          </form>
        </div>
      )}
    </Formik>
  );
}
