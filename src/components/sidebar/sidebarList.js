import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { ImDatabase } from 'react-icons/im';
import { FaDollarSign } from 'react-icons/fa';
import { MdSms } from 'react-icons/md';

// type menuType = {
//   icon: JSX.Element,
//   text: String,
//   link: String,
// };
export const mainMenu = [
  {
    icon: <AiFillHome />,
    text: 'Home',
    link: '/home',
  },
  {
    icon: <ImDatabase />,
    text: 'Dashboard',
    link: '/home',
  },
  {
    icon: <FaDollarSign />,
    text: 'Transaction',
    link: '/home',
  },
  {
    icon: <MdSms />,
    text: 'By SMS',
    link: '/home',
  },
];
