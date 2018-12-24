<template>
  <div class="navigation">
    <div class="navigation--accordion-card">
      <h2 class="navigation--accordion-card--header">
        Projects
        <i class="fa navigation--accordion-card--icon" :class="iconOpen" @click="toggle()"></i>
      </h2>
      <div class="navigation--accordion-card--content" :class="subMenu">
        <h3 v-for="project in projects" :key="project.name">{{ project.name }}</h3>
      </div>
    </div>
    <h2>Resume</h2>
    <h2>Contact</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      projects: [
        {
          name: 'Movie Search Vue',
        },
        {
          name: 'Movie Search React',
        },
        {
          name: 'Crew Scheduler',
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

.navigation {
  width: 50vw;
  margin-top: 2vw;
  padding-left: 15vw;
  text-align: left;

  h2 {
    font-size: 3.5vw;
    margin-top: 0;
  }

  &--accordion-card {
    .open {
      transform: rotate(0deg);
    }

    &--header {
      margin-bottom: 0;
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
      padding: 10px;
      font-size: 2.75vw;
      transform: rotate(90deg);
      transition: all 200ms ease;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
