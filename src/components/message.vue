<template>
  <div class="message">
    <div class="top-info">
      <span>{{message.date}} / {{message.authorName}}</span> /
      <a :href="message.authorUrl">{{message.authorUrl}}</a>
    </div>
    <div class="content" v-html="message.content"></div>
  </div>
</template>

<script>
export default {
  name: "message",
  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.message {
  border-bottom: 1px solid #777;
  padding: 2em 0;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
