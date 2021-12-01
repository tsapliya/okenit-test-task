import feed1 from './../../feed1.json'
import api from '@/api'

export default {
  loadFeedFromJson() {
    return feed1
  },

  loadFeedFromJsonServer(_page = 1, _limit = 10) {
    return api.get('/feed', {params: {_limit, _page}})
      .then(response => ({
          data: response.data,
          hasNextPage: Boolean(response.headers.link.split(',').find(i => i.includes('rel="next"')))
        })
      )
  }
}
