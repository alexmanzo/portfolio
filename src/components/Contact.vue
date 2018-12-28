<template>
  <div class="contact">
    <div class="contact--item" v-for="contact in contacts" :key="contact.tite">
      <a v-if="contact.path.includes('https://')" :href="contact.path" target="_blank">
        <i :class="contact.class"></i>
        <h3>{{ contact.title }}</h3>
      </a>
      <a v-else :href="contact.path">
        <i :class="contact.class"></i>
        <h3>{{ contact.title }}</h3>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          title: 'E-mail Me',
          class: 'fab fa-github contact--item--icon',
          path: 'mailto:memanzo17@gmail.com',
        },
        {
          title: 'Github',
          class: 'fab fa-github contact--item--icon',
          path: 'https://github.com/alexmanzo',
        },
        {
          title: 'LinkedIn',
          class: 'fab fa-linkedin contact--item--icon',
          path: 'https://www.linkedin.com/in/alexmanzomedia/',
        },
      ],
    }
  },
  methods: {},
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

.contact {
  display: flex;
  justify-content: center;
  width: 95vw;

  &--item {
    padding: 25vh 8vw;
    text-align: center;

    &--icon {
      font-size: 8vw;
    }
  }
}

@media screen and (max-width: $medium) {
  .contact {
    &--item {
      padding: 35vh 8vw;

      h3 {
        font-size: 4vw;
      }
      &--icon {
        font-size: 12vw;
      }
    }
  }
}
</style>
