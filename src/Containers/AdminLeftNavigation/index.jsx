import React, { useState } from 'react';
import './index.scss';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import UpdateIcon from '@material-ui/icons/Update';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link, useLocation } from 'react-router-dom';

export default function AdminLeftNavigation() {
  const [selected, setSelected] = useState(false);
  const { pathname } = useLocation();

  const huldlClick = (item) => {
    setSelected(item);
  };

  return (
    <div className='my-adminleftmenu'>
      <div className='my-adminleftmenu-bur'>
        <svg
          width='100%'
          height='100%'
          viewBox='0 0 33 33'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M33 10.3125H0V8.25H33V10.3125ZM33 26.8125H0V24.75H33V26.8125ZM33 18.546H0V16.5H33V18.546Z'
            fill='#D0D1D2'
          />
        </svg>
      </div>
      <div
        className={`my-adminleftmenu-kub ${
          pathname == '/dashboard' ? 'leftmenubox' : ''
        }`}
      >
        <Link to='/dashboard'>
          <ViewQuiltIcon />
        </Link>
      </div>
      <div
        className={`my-adminleftmenu-kub ${
          pathname == '/invoices' ? 'leftmenubox' : ''
        }`}
        onClick={() => huldlClick(2)}
      >
        <Link to='/invoices'>
          <UpdateIcon />
        </Link>
      </div>
      <div>
        <SettingsIcon
          className={`my-adminleftmenu-kub ${
            selected == 3 ? 'leftmenubox' : ''
          }`}
          onClick={() => huldlClick(3)}
        />
      </div>
    </div>
  );
}
