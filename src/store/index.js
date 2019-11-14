//store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { setToken } from '../utils/auth'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        'userInfo': {},
        'token': {},
        'avatar': ''
    },
    actions: {
        getUserInfo(ctx, token) {
            axios.get(`/userInfo?token=${token}`)
                .then(function (response) {
                    window.console.log(response);
                    ctx.commit('getUserInfo', response.userInfo)
                })
                .catch(function (error) {
                    window.console.log(error);
                });
        },
        login(ctx, loginForm) {
            // var { name: username, pass: password } = loginForm;
            // axios.post(`/login`,{
            //     username,
            //     password
            // })
            // .then(function (response) {
            //     window.console.log(response);
            //     setToken(response.token);
            //     ctx.commit('login', response.token);
            // })
            // .catch(function (error) {
            //     window.console.log(error);
            // });
            setToken(loginForm.name);
            ctx.commit('login', loginForm.name)
        }
    },
    mutations: {
        getUserInfo(state, userInfo) {
            this.state.userInfo = userInfo
        },
        login(state, token) {
            this.state.token = token;
        }
    }
})