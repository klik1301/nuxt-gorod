const axios = require('axios');

export const NEW_AD = 'NEW_AD'

export const state = {
  list: [],
  ad: null,
}

export const mutations = {
  [NEW_AD]: (state, data) => {
    state.ad = data
  },
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    // if (req.session && req.session.authUser) {
    //   commit('SET_USER', req.session.authUser)
    // }
    console.log('nuxtServerInit')
  },

  search (ctx, params) {
    return axios.get('http://localhost:5005/api/ad', { params })
      .then((res) => {
        ctx.commit(NEW_AD, res.data)
      })
  },
};
