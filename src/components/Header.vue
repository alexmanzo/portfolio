<template>
  <div class="personal-info">
    <div class="personal-info--name">
      <h1>
        <span class="personal-info--name--first">{{ firstName }}</span>
        <br>
        <span class="personal-info--name--last">{{ lastName }}</span>
      </h1>
    </div>
    <div class="personal-info--bio">
      <p>Hi! Thanks for stopping by.</p>
      <p>I'm a recovering sports video producer turned web developer.</p>
      <p>Feel free to check out some of my projects and get in touch!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Alex',
      lastName: 'Manzo',
    }
  },
}
</script>

<style scoped lang="scss">
@import 'main.scss';
.personal-info {
  width: 50vw;
  margin-left: 3vw;

  h1 {
    text-transform: uppercase;
    margin: 0;
  }

  &--name {
    text-align: center;

    &--first {
      color: $green;
      font-size: 19vw;
      line-height: 50%;
    }

    &--last {
      color: black;
      font-size: 13vw;
      line-height: 75%;
    }
  }

  &--bio {
    font-size: 1.5vw;
    margin-top: 2vh;
    text-align: left;
    padding-left: 15px;
    font-weight: 400;
  }
}
</style>
