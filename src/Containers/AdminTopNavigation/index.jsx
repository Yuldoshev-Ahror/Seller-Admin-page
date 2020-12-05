import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';

export default function AdminTopNavigation() {
  const [selected, setSelected] = useState(false);
  const { pathname } = useLocation();
  const hundlClick = () => {
    setSelected(pathname.toString());
  };

  return (
    <div className='my-admintopmenu'>
      <div>
        <Link
          to='dashboard'
          className={pathname == '/dashboard' ? 'adtopmenu' : ''}
          onClick={hundlClick}
        >
          Dashboard
        </Link>
      </div>
      <div>
        <Link
          to='helpdesk'
          className={pathname == '/helpdesk' ? 'adtopmenu' : ''}
          onClick={hundlClick}
        >
          Helpdesk
        </Link>
      </div>
      <div>
        <Link
          to='product'
          className={pathname == '/product' ? 'adtopmenu' : ''}
          onClick={hundlClick}
        >
          Product management
        </Link>
      </div>
      <div className='my-atext-avatar'>
        Darlene Robertson
        <div className='avatar-imga'>
          <img
            src='https://miro.medium.com/max/13608/1*o8tTGo3vsocTKnCUyz0wHA.jpeg'
            alt='avatar'
          />
        </div>
      </div>
    </div>
  );
}
