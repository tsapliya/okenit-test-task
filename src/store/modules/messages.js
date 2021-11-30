import messages from '@/api/messages'
import messageGetter from '@/compositions/messageGetterFunctions'

export default {
  namespaced: true,
  state: {
    feed: []
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
    }
  },
  actions: {
    addFeedFromJson({commit}) {
      const feed = messages.loadFeedFromJson()
      commit('pushFeed', feed)
    }
  }
}
