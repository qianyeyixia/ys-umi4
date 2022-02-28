/*
 * @Author: wangyi
 * @Description: 
 * @Date: 2022-02-25 17:59:33
 * @LastEditTime: 2022-02-28 11:31:40
 */
import React from 'react';
import { SmileOutlined, CrownOutlined, TabletOutlined, AntDesignOutlined } from '@ant-design/icons';
export default {
  route: {
    path: "/",
    routes: [
      {
        path: "/home",
        name: "主页1",
        icon: <SmileOutlined />,
        component: './HomePage',
      },
      {
        path: "/todo",
        name: "Todo",
        icon: <CrownOutlined />,
        component: './Todo',
      },
      {
        path: "/docs",
        name: "文档",
        icon: <TabletOutlined />,
        component: './Docs',
      }
    ]
  }
}