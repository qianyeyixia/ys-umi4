import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'umi';

import { Button, Descriptions, Result, Avatar, Space, Statistic } from 'antd';
import { LikeOutlined, UserOutlined } from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-layout';
import ProLayout, { PageContainer, SettingDrawer } from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import Logo from "./_logo";


import styles from './index.less';

export default function Layout() {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true });
  const [pathname, setPathname] = useState("/home");
  return (
    <div id="umi-next" style={{height: "100vh"}}>
      <ProLayout
        {...defaultProps}
        title="umi-next"
        location={{
          pathname,
        }}
        logo={<Logo />}
        waterMarkProps={{ content: "UMI-NEXT" }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(menuItemProps, defaultDom) => (
          <a onClick={() => {
            setPathname(menuItemProps.path || "/")
          }}>
            {defaultDom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
        {...settings}
      >
        <PageContainer />
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('umi-next')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </div>
  );
}
