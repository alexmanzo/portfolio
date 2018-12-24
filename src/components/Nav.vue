<template>
  <div class="navigation">
      <div v-for="(item, index) in navItems" :key="index">
          <h2>{{ navItems[index] }}<span>&nbsp;+&nbsp;</span></h2>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: ['Projects', 'Resume', 'Contact'],
    }
  },
}
</script>

<style scoped lang="scss">
@import 'main.scss';

.navigation {
  width: 50%;
  padding-top: 30vh;
  text-align: center;
  margin-right: 10vw;

  h2 {
    @include setLargeFontSize(40px);
  }
}
</style>
