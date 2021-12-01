import messagesApi from '@/api/messages'
import messageGetter from '@/compositions/messageGetterFunctions'

export default {
  namespaced: true,
  state: {
    feed: [],
    currentPage: 0,
    isLoadingData: false,
    hasNextPage: undefined
  },
  getters: {
    getColoredFeed(state) {
      return state.feed.map(i => ({
          ...i,
          date: messageGetter.prepareDate(i.date),
          content: messageGetter.fillContent(i)
        })
      )
    }
  },
  mutations: {
    pushFeed(state, payload) {
      state.feed.push(...payload)
    },
    setLoadingDataStatus(state, payload) {
      state.isLoadingData = payload
    },
    incrementCurrentPage(state) {
      state.currentPage++
    },
    setNextPageExists(state, payload) {
      state.hasNextPage = payload
    }
  },
  actions: {
    // addFeedFromJson({commit}) {
    //   const feed = messagesApi.loadFeedFromJson()
    //   commit('pushFeed', feed)
    // }

    loadFeed({state, commit}) {
      commit('setLoadingDataStatus', true)
      commit('incrementCurrentPage')
      return messagesApi.loadFeedFromJsonServer(state.currentPage)
        .then(response => {
          commit("pushFeed", response.data)
          commit('setLoadingDataStatus', false)
          commit('setNextPageExists', response.hasNextPage)
        })
    }
  }
}
