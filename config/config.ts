/*
 * @Author: wangyi
 * @Description: 
 * @Date: 2022-02-25 16:10:23
 * @LastEditTime: 2022-02-25 17:30:52
 */
import {defineConfig} from "umi"

export default defineConfig({
  npmClient: 'pnpm',
  conventionRoutes: {
    exclude: [
      /\/components\//,
      /\/models\//,
      /\/services\//,
      /\/utils\//,
      /\/assets\//,
      /\/styles\//,
      /\/router\//,
      /\/config\//,
      /\/locales\//,
      /\/public\//,
      /\/api\//,
      /\/constants\//,
      /\/typing\//,
    ]
  },
  alias: {
    "@": "./src",
  }
})