/*
 * @Author: wangyi
 * @Description: 
 * @Date: 2022-03-01 16:07:33
 * @LastEditTime: 2022-03-01 16:10:38
 */
import {defineConfig} from "umi";
import defaultSettings from './defaultSettings';
import proxy from './proxy';

export default defineConfig({
  model: {},
  antd: {},
  layout: false,
  request: {},
  fastRefresh: true,
  proxy: proxy[REACT_APP_ENV],
})