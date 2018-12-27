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
}

#home,
#resume {
  display: -webkit-box;
  justify-content: flex-start;
}

#home {
  padding-top: 20vh;
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
  #resume {
    padding-top: 5vh;
    display: block;
    width: 100%;
  }
}
</style>
