<template>
  <div :class="isHome">
    <div class="navigation">
      <router-link :to="{name: 'projects'}">
        <h2>Projects</h2>
      </router-link>
      <router-link :to="{name: 'resume'}">
        <h2>Resume</h2>
      </router-link>
      <router-link :to="{name: 'contact'}">
        <h2>Contact</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      projects: [
        {
          name: 'All-Gender Bathroom Finder',
          path: 'https://bathroom-finder.alexmanzo.me/',
        },
        {
          name: 'Movie Search Vue',
          path: 'https://movie-search-vue.alexmanzo.me/',
        },
        {
          name: 'Movie Search React',
          path: 'https://movie-search-react.alexmanzo.me/',
        },
        {
          name: 'Crew Scheduler',
          path: 'https://fierce-wildwood-43879.herokuapp.com/',
        },
      ],
    }
  },
  computed: {
    iconOpen() {
      return {
        'fa-minus': this.isOpen === true,
        'fa-plus': this.isOpen === false,
        open: this.isOpen === true,
      }
    },
    subMenu() {
      return {
        'navigation--accordion-card--content--open': this.isOpen === true,
      }
    },
    isHome() {
      return {
        'nav-home': this.$route.path === '/',
        'nav-subpage': this.$route.path != '/',
      }
    },
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style scoped lang="scss">
@import 'main.scss';
a {
  color: black;
}

a:hover {
  color: $green;
}

h2 {
  margin-top: 0;
}

// ----- Shared Styles ----- //
.navigation {
  text-align: left;
  margin-top: 50px;
  &--accordion-card {
    .open {
      transform: rotate(0deg);
      color: $green;
    }

    &--header {
      margin-bottom: 0;

      &:hover {
        color: $green;
        cursor: pointer;
      }
    }

    &--content {
      margin-left: 2vw;
      padding-left: 1vw;
      border-left: 2px solid $gray;
      max-height: 0;
      opacity: 0;
      transition: all 500ms;

      h3 {
        font-size: 2vw;
      }

      &--open {
        max-height: 75vh;
        opacity: 1;
        transition: all 1s;
      }
    }

    &--icon {
      transform: rotate(90deg);
      transition: transform 200ms ease;

      &:hover {
        cursor: pointer;
        color: $green;
      }
    }
  }
}

// ----- Subpage Nav ----- //
.nav-subpage {
  .navigation {
    width: 60vw;
    padding-top: 2vh;
    text-align: center;
    display: inline-flex;
    background-color: rgba($color: #fff, $alpha: 1);

    h2 {
      font-size: 2.25vw;
      padding-right: 25px;
    }

    &--accordion-card {
      text-align: left;
      margin-right: -9vw;

      &--header {
        margin-bottom: 0;
        padding-right: 0 !important;
      }

      &--content {
        h3 {
          font-size: 2vw;
        }

        &--open {
          max-height: 100vh;
          opacity: 1;
          margin-top: 2vh;
          padding-bottom: 2vh;
          padding-top: 2vh;
        }
      }

      &--icon {
        padding: 10px 0 0 10px;
        font-size: 1.75vw;

        &:hover {
          cursor: pointer;
          color: $green;
        }
      }
    }
  }
}

// ----- Home Nav ----- //
.nav-home {
  .navigation {
    width: 40vw;
    padding-left: 15vw;

    h2 {
      font-size: 3.5vw;
    }

    &--accordion-card {
      &--content {
        padding-left: 1vw;
        border-left: 2px solid $gray;
        max-height: 0;
        opacity: 0;

        h3 {
          font-size: 2vw;
        }

        &--open {
          max-height: 75vh;
          opacity: 1;
        }
      }

      &--icon {
        padding: 10px;
        font-size: 2.75vw;

        &:hover {
          cursor: pointer;
          color: $green;
        }
      }
    }
  }
}

@media screen and (max-width: $medium) {
  .nav-home {
    .navigation {
      padding: 0;
      width: 100%;
      text-align: center;

      h2 {
        font-size: 8vw;
      }

      &--accordion-card {
        text-align: center;
        border: none;
        &--content {
          border: none;
        }

        h3 {
          font-size: 4vw;
        }

        &--icon {
          font-size: 4vw;
          padding: 1.5vw 0 0 1vw;
        }
      }
    }
  }

  .nav-subpage {
    .navigation {
      width: 90vw;
      padding-top: 0;
      margin-left: 15%;
      display: inline-flex;

      h2 {
        font-size: 5vw;
      }

      &--accordion-card {
        text-align: center;
        border: none;
        margin-right: 0;

        &--header {
          padding-right: 0 !important;
        }
        &--content {
          margin-right: 5vw;
          border: none;

          h3 {
            font-size: 3vw;
          }

          &--open {
            max-height: 100vh;
            margin-top: 1vh;
            padding-bottom: 3vh;
            padding-top: 3vh;
          }
        }

        &--icon {
          padding: 1vw 0 0vw 0;
          font-size: 3vw;
        }
      }
    }
  }
}

</style>
