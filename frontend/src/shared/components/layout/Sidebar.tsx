/**
 * Sidebar Component
 * Navigation menu
 */

import React from 'react';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  UserAddOutlined,
  LoginOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: '/registration',
      icon: <UserAddOutlined />,
      label: 'New Registration',
    },
    {
      key: '/login',
      icon: <LoginOutlined />,
      label: 'Already Registered',
    },
    {
      key: '/important-dates',
      icon: <FileTextOutlined />,
      label: 'Important Dates',
    },
    {
      key: '/instructions',
      icon: <InfoCircleOutlined />,
      label: 'Instructions',
    },
    {
      key: '/helpline',
      icon: <PhoneOutlined />,
      label: 'Helpline',
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname]}
      items={menuItems}
      onClick={handleMenuClick}
      style={{ height: '100%', borderRight: 0 }}
    />
  );
};
