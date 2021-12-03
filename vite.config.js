import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        }
    },
    plugins: [
        vue(),
        styleImport({
            libs: [
                {
                    libraryName: 'vant',
                    esModule: true,
                    resolveStyle: (name) => `/node_modules/vant/es/${name}/style`,
                },
            ],
        })
    ],
    css: {
        postcss: {
            plugins: [
                require('postcss-px-to-viewport')({
                    unitToConvert: "px",// 要转化的单位
                    viewportWidth: 750,// UI设计稿的宽度
                    unitPrecision: 2, // 转换后的精度，即小数点位数
                    propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
                    viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
                    fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
                    selectorBlackList: ["wrap", "--van", "van", ":root"], // 指定不转换为视窗单位的类名，
                    minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
                    mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
                    replace: true, // 是否转换后直接更换属性值
                    exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
                    landscape: false, // 是否处理横屏情况
                })
            ]
        },
        preprocessorOptions: {
            scss: {
                //引入全局scss变量
                additionalData: `@import "@/assets/css/var.scss";`
            }
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'https://zf1.wjkj.com/api/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    }
})
