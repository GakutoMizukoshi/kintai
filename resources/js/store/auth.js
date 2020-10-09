const state = {
  user: null
}

const getters = {
  check: state => !! state.user, // 二重否定して確実に真偽値を取得する
  username: state => state.user.name ?? ''
}

const mutations = {
  setUser (state, user) {
    state.user = user
  }
}

const actions = {
  async register (context, data) {
    const response = await axios.post('/register', data)
    context.commit('setUser', response.data)
  },
  async login (context, data) {
    const response = await axios.post('/login', data)
    context.commit('setUser', response.data)
  },
  async logout (context, data) {
    const response = await axios.post('/logout')
    context.commit('setUser', null)
  },
  async currentUser (context, data) {
    const response = await axios.get('/user')
    const user = response.data || null // nullに揃える
    context.commit('setUser', user)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
