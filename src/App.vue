<template>
    <span v-if="feed.length === 0">Сообщений нет</span>
    <message v-else v-for="(message, i) in feed" :key="i" :message="message"/>
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
</style>
