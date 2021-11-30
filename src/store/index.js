import { createStore } from 'vuex'
import messages from '@/store/modules/messages'

export default createStore({
  modules: {
    messages
  }
})
