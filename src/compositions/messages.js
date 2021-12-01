import {useStore} from "vuex";
import {computed} from "vue";

export default function () {

  const store = useStore()
  return {
    addFeedFromJson: () => {
      store.dispatch('messages/addFeedFromJson')
    },
    loadFeed: () => {
      store.dispatch('messages/loadFeed')
    },
    feed: computed(() => store.getters["messages/getColoredFeed"]),
    isLoadingData: computed(() => store.state.messages.isLoadingData),
    hasNextPage: computed(() => store.state.messages.hasNextPage)
  }

}
