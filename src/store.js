import Vue from 'vue'
import Vuex from 'vuex'
import * as mt from './mutation-types'
import Vuetify from 'vuetify';

Vue.use(Vuetify)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kids: [{id: 1, name: 'mat' , icon: 'https://materiell.com/wp-content/uploads/2015/03/john-full.png'}]
  },
  mutations: {
    addKid: (state, { kid }) => state.kids.push(kid),
    removeKid: (state, { id }) => state.kids = state.kids.filter(kid => kid.id !== id),
    upvoteKid: (state, { kid }) =>  state.kids.find(k => k.id === kid.id).vote++,
    downVoteKid: (state, { kid }) =>  state.kids.find(k => k.id === kid.id).vote--,
  },
  getters: {
    allKids: state => state.kids
  },
  actions: {
    addKid ({ commit }, { kid }) {
      return new Promise((resolve) => {
        setTimeout(() => {
        kid.icon = 'https://materiell.com/wp-content/uploads/2015/03/john-full.png';
        commit(mt.ADD_KID, { kid })
          resolve();
        }, 350);
      })
    },
    removeKid ({ commit }, { id }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit(mt.REMOVE_KID, { id });
          resolve();
        }, 200); 
      })
    }
  }
})
