<template>
  <div :class="isHome">
    <div class="personal-info">
      <h1>
        <span class="personal-info--first">{{ firstName }}</span>
        <br>
        <span class="personal-info--last">{{ lastName }}</span>
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
  computed: {
    isHome() {
      return {
        home: this.$route.path === '/',
        subpage: this.$route.path != '/',
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import 'main.scss';

h1 {
  text-transform: uppercase;
  margin: 0;
}
// ----- Shared Styles ----- //
.personal-info {
  &--first {
    color: $green;
    line-height: 50%;
  }

  &--last {
    line-height: 75%;
  }

  &--bio {
    font-size: 1.5vw;
    margin-top: 2vh;
    text-align: left;
    padding-left: 15px;
    font-weight: 400;
  }
}

// ----- Home Styling ----- //
.home {
  width: 40vw;
  padding-left: 8vw;

  .personal-info {
    &--first {
      font-size: 15vw;
      padding-left: 1vw;
    }

    &--last {
      font-size: 10.5vw;
    }
  }
}

// ----- Subpage Styling ----- //
.subpage {
  width: 30vw;
  padding: 5vh 0 0 15vw;

  .personal-info {
    &--first {
      font-size: 6vw;
    }

    &--last {
      font-size: 4vw;
    }

    &--bio {
      display: none;
    }
  }
}

@media screen and (max-width: $medium) {
  .home {
    text-align: center;
    padding: 0 0 0 4vw;
    width: 90vw;

    .personal-info {
      &--first {
        font-size: 30vw;
        padding-right: 1vw;
      }

      &--last {
        font-size: 21vw;
      }

      &--bio {
        font-size: 4vw;
        text-align: center;
        margin-top: 3vh;
        font-weight: 400;
      }
    }
  }

  .subpage {
    text-align: center;
    padding: 0 0 0 3vw;
    width: 90vw;

    .personal-info {
      &--first {
        font-size: 30vw;
        padding-right: 1vw;
      }

      &--last {
        font-size: 21vw;
      }

      &--bio {
        font-size: 4vw;
        text-align: center;
        margin-top: 3vh;
        font-weight: 400;
      }
    }
  }
}
</style>
