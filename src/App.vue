<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: 'zoom-in',
    }
  },
}
</script>


<style lang="scss">
@import 'main.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  position: relative;
}

#resume header,
#contact header {
  display: -webkit-box;
  position: absolute;
}

#home {
  padding-top: 20vh;
  display: -webkit-box;
}

a {
  text-decoration: none;
}

a:visited {
  color: black;
}

a:active {
  color: black;
}

@media screen and (max-width: $medium) {
  #home,
  #resume header,
  #contact header {
    padding-top: 5vh;
    display: block;
    width: 100%;
  }
}
</style>
