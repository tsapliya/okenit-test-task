<template>
<div class="loader">
  <div class="loader-content"></div>
</div>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 1em;
}

.loader-content {
  width: 30px;
  height: 30px;
  background-image: url("/loader.png");
  background-size: 100%;

  animation-name: rotation;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes rotation {
  0% {
    transform:rotate(0deg);
  }
  100% {
    transform:rotate(360deg);
  }
}
</style>
