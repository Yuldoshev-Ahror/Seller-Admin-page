import './index.scss';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  RadialBarChart,
  Legend,
  RadialBar,
} from 'recharts';
import { Link } from 'react-router-dom';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Dashboard() {
  const DashborData = [
    {
      name: `Nike SB Dunk High "P-Rod"`,
      time: 'Today, 22:04 PM',
      price: '$110, 000',
    },
    {
      name: `Nike SB Dunk High "P-Rod"`,
      time: 'Today, 22:04 PM',
      price: '$110, 000',
    },
    {
      name: `Nike SB Dunk High "P-Rod"`,
      time: 'Today, 22:04 PM',
      price: '$110, 000',
    },
    {
      name: `Nike SB Dunk High "P-Rod"`,
      time: 'Today, 22:04 PM',
      price: '$110, 000',
    },
  ];

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className='my-adashbord-container'>
      <div className='my-adshbord-rghit'>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
            <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='uv'
            stroke='#8884d8'
            fillOpacity={1}
            fill='url(#colorUv)'
          />
          <Area
            type='monotone'
            dataKey='pv'
            stroke='#82ca9d'
            fillOpacity={1}
            fill='url(#colorPv)'
          />
        </AreaChart>

        <RadialBarChart
          width={730}
          height={250}
          innerRadius='10%'
          outerRadius='80%'
          data={data.map((item) => ({ ...item, fill: getRandomColor() }))}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            minAngle={15}
            label={{ fill: '#666', position: 'insideStart' }}
            background
            clockWise={true}
            dataKey='uv'
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout='vertical'
            verticalAlign='middle'
            align='right'
          />
          <Tooltip />
        </RadialBarChart>
      </div>
      <div className='my-adshbord-left'>
        <div>
          <h3>Last selled products</h3>
          <div className='my-adshbord-content'>
            {DashborData.map((item) => (
              <div className='my-adshbord-box'>
                <div className='my-adshbord-box-gr'>
                  <div className='my-adshbord-box-time'>{item.time}</div>
                  <div className='my-adshbord-box-price'>{item.price}</div>
                </div>
                <div className='my-adshbord-box-title'>{item.name}</div>
              </div>
            ))}
            <p>
              <Link to='/product'>view more</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
