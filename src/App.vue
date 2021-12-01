<template>
  <div class="messages">
    <span v-if="feed.length === 0">Сообщений нет</span>
    <message v-else v-for="(message, i) in feed" :key="i" :message="message"/>
  </div>
</template>

<script>
import messages from '@/compositions/messages'
import Message from "@/components/message";

export default {
  name: 'App',
  components: {Message},
  setup() {
    return {
      ...messages()
    }
  },
  mounted() {
    this.addFeedFromJson()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.messages {
  width: 70%;
  margin: 0 auto;
}
</style>
