/**
 * Main Layout Component
 * Modern, responsive full-page layout
 */

import React, { useState } from 'react';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';
import './MainLayout.css';

const { Content, Sider } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="app-container">
      <Header />

      <Layout className="main-layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="lg"
          collapsedWidth={0}
          className="sidebar"
          width={250}
        >
          <Sidebar />
        </Sider>

        <Layout className="content-wrapper">
          <div className="menu-toggle">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger-icon',
              onClick: () => setCollapsed(!collapsed),
            })}
          </div>

          <Content className="main-content">
            {children}
          </Content>

          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};
