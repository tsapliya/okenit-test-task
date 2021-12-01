<template>
  <div class="messages">
    <span v-if="feed.length === 0">Сообщений нет</span>
    <message v-else v-for="(message, i) in feed" :key="i" :message="message"/>
    <loader v-if="isLoadingData"/>
    <button ref="loadButton" v-else-if="hasNextPage" @click="loadFeed">Загрузить еще</button>
  </div>
</template>

<script>
import messages from '@/compositions/messages'
import Message from "@/components/Message";
import Loader from "@/components/Loader";

export default {
  name: 'App',
  components: {Loader, Message},
  setup() {
    return {
      ...messages()
    }
  },
  mounted() {
    //this.addFeedFromJson()
    this.loadFeed()

    window.addEventListener('scroll', () => {
      if (!this.hasNextPage || this.isLoadingData) {
        return
      }
      const btn = this.$refs['loadButton']

      if (!btn) {
        return
      }

      if (window.scrollY + window.innerHeight > btn.offsetTop) {
        this.loadFeed()
      }

    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.messages {
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  padding-bottom: 3em;
}

.messages button {
  margin: 1em auto;
  cursor: pointer;

}
</style>
