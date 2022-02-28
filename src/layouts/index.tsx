import React, { useState } from 'react';
import {Outlet, history } from "umi"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
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
            console.log(menuItemProps);
            setPathname(menuItemProps.path || "/")
            history.push(menuItemProps.path || "/")
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
        <PageContainer content={<Outlet/>}/>
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
