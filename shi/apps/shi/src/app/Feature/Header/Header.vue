<script lang="ts">
// defineProps<{}>()
export default {
  name: 'HeaderFrame',
};
</script>

<template>
  <h1 class="flex align-items-center">
    <a class="align-self-start" :href="'/main/' + 'login' + '#header'" accesskey="T" id="header">
      <img src="../../../assets/icons/drag_indicator.png" alt="導盲磚" />
    </a>
    <a href="">
      <img class="logo" src="../../../assets/images/logo 2.png" width="100%" alt="恃" />
    </a>
    <Divider layout="vertical" />
    <p class="title" tabindex="0">恃</p>
  </h1>
</template>

<style lang="scss" scoped>
.title {
  font-family: Noto Sans TC;
  font-size: 2rem;
  font-weight: 400;
  line-height: 3rem;
  letter-spacing: 0.1875rem;
  text-align: left;
}
</style>
