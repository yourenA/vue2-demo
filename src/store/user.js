import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录

export default {
    state: JSON.parse(sessionStorage.getItem('user')) || {},
    /**
     * mutations相当于reducer 可以直接变更状态
     * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
     * 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)
     * 使用常量替代 mutation 事件类型
     * mutation必须是同步函数
     * user为载荷
     */
    mutations: {
        [USER_SIGNIN](state, user) {
            sessionStorage.setItem('user', JSON.stringify(user))
            Object.assign(state, user)
        }
        /**
         * 相当于
         * USER_SIGNIN：function(state, user){}
         * */
        ,
        [USER_SIGNOUT](state) {
            sessionStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        }
    },
    /**
     * Action 提交的是 mutation，而不是直接变更状态。
     * Action 可以包含任意异步操作。
     * Action 函数接受一个与 store 实例具有相同方法和属性的 context 对像
     * 因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
     * {commit,dispatch}取到context对象里的commit,dispatch
     */
    actions: {
        [USER_SIGNIN]({commit}, user) {
            /**
             * commit提交mutation
             */
            commit(USER_SIGNIN, user)
        },
        [USER_SIGNOUT]({commit}) {
            commit(USER_SIGNOUT)
        }
    }
}