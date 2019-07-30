import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'
import tags from './modules/tags'
import getters from './getters'

// logger提供的信息，方便我们查看state数据的变化

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
    common,
    tags
  },
  getters
})

export default store
