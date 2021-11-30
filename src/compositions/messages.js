import {useStore} from "vuex";
import {computed} from "vue";

export default function () {

  const store = useStore()
  return {
    addFeedFromJson: () => {
      store.dispatch('messages/addFeedFromJson')
    },
    feed: computed( () => store.getters["messages/getColoredFeed"])
  }

}
