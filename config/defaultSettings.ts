import { Settings as ProSettings } from '@ant-design/pro-layout';
// import IconFontURL from "../public/iconfont/iconfont"

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
  [key: string]: any;
};
const proSettings: DefaultSettings = {
  pwa: false,
  navTheme: 'light',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Umi-Next',
  // 拂晓蓝
  primaryColor: '#1890ff',
  borderRadiusBase: '3px',
  borderRadiusSm: '2px',
  shadowColor: 'rgba(0, 0, 0, 0.05)',
  shadow1Down: '4px 4px 40px @shadow-color',
  borderColorSplit: '#f4f4f4',
  borderColorBase: '#e5e5e5',
  menuDarkBg: '#3e3e3e',
  textColor: '#666',
  fontFamily: 'Hiragino Sans GB,Helvetica, sans-serif',
  logo: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
  tablePaddingVertical: '8px',
  tablePaddingHorizontal: '4px',
};

export type { DefaultSettings };

export default proSettings;
