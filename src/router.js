import { createRouter, createWebHashHistory } from "vue-router"
import home from './components/home.vue'
import download from './components/download.vue'
import upload from './components/upload.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            name:'欢迎面',
            component:home
        },
        {
            path:"/result",
            name:'下载结果',
            component:download
        },
        {
            path:"/submit",
            name:'上传数据',
            component:upload
        },
    ]
});

export default router;