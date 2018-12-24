<template>
  <div class="navigation">
    <div v-for="(item, index) in navItems" :key="index" class="navigation--accordion-card">
      <h2>
        {{ navItems[index] }}
        <i class="fa fa-plus navigation--accordion-card--icon" @click="toggle"></i>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: ['Projects', 'Resume', 'Contact'],
      isOpen: false,
    }
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
  width: 50%;
  padding-top: 30vh;
  text-align: center;
  margin-right: 10vw;

  h2 {
    @include setLargeFontSize(40px);
  }

  &--accordion-card {
    &--icon {
      padding: 10px;
      @include setLargeFontSize(30px);

      &:hover {
        cursor: pointer;
      }
    }

    &--is-closed {
      max-height: 0;
    }

    &--is-open {
      i {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
