import Vue from 'vue'
import Vuex from 'vuex'
import * as mt from './mutation-types'
import Vuetify from 'vuetify';

Vue.use(Vuetify)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kids: [{id: 1, name: 'mat' }]
  },
  mutations: {
    addKid: (state, { kid }) => state.kids.push(kid),
    upvoteKid: (state, { kid }) =>  state.kids.find(k => k.id === kid.id).vote++,
    downVoteKid: (state, { kid }) =>  state.kids.find(k => k.id === kid.id).vote--,
  },
  actions: {
    addKid ({ commit }, { kid }) {
      return new Promise((resolve) => {
        setTimeout(() => {
        commit(mt.ADD_KID, { kid })
          resolve();
        }, 350);
      })
    }
  }
})
