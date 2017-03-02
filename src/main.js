import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './config/routes'
import store from './store/'
import components from './components/' //加载公共组件
console.log("components",components)
import './css/common.css'
import './less/common.less'

//Object.keys 传入对象，返回属性名数组
Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    /**
     * Vue.component('my-component', {})
     * 注册组件，传入一个选项对象（自动调用 Vue.extend）
     * 如注册全局vHeader组件此时可以在template中使用v-header
     */

    Vue.component(`v${name}`, components[key])
})

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

//根据路由元信息判断是不是要登陆
router.beforeEach((to, from, next) => {
    //设置to.meta初始化为true
    var { auth = true } = to.meta
    console.log("auth",auth)
    var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录
    console.log(store.state)
    if (auth && !isLogin && to.path !== '/login') {
        return next({ path: '/login' })
    }
    next()
})

new Vue({ store, router }).$mount('#app')