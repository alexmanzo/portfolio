<template>
  <header>
    <div class="personal-info">
      <h1>
        <span class="personal-info--first-name">{{ firstName }}</span>
        <br>
        <span class="personal-info--last-name">{{ lastName }}</span>
      </h1>
      <div class="personal-info--bio">
        <p>Hi! Thanks for stopping by.</p>
        <p>I'm a recovering sports video producer turned web developer.</p>
        <p>Feel free to check out some of my projects and get in touch!</p>
      </div>
    </div>
  </header>
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

header {
  width: 50%;
}

.personal-info {
  margin-left: 3vw;
  padding-top: 25vh;

  h1 {
    text-transform: uppercase;
    margin: 0;
  }

  &--first-name {
    color: $green;
    @include setLargeFontSize(235px);
    line-height: 50%;
    padding-left: 15px;
  }

  &--last-name {
    color: black;
    @include setLargeFontSize(165px);
    line-height: 75%;
  }

  &--bio {
    @include setFontSize(20px);
    margin-top: 2vh;
    text-align: left;
    padding-left: 15px;
    font-weight: 400;
  }
}
</style>
