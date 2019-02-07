<template>
  <div
    id="project"
    class="project"
    :class="hoverVisible"
    @mouseover="hoverOn()"
    @mouseleave="hoverOff()"
  >
    <h2 v-html="name">{{ name }}</h2>
    <img :src="imgPath" :alt="name" :class="hoverVisible">
    <p v-html="description" class="project--description" :class="hoverVisible">{{description}}</p>
    <div class="project--links" :class="hoverVisible">
      <a v-if="codePath" :href="codePath" target="_blank">
        <i class="fab fa-github"></i>See the Code
      </a>
      <a v-if="livePath" :href="livePath" target="_blank">
        <i class="fas fa-laptop-code"></i>See the Demo
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'imgPath', 'description', 'codePath', 'livePath'],
  data() {
    return {
      hover: false,
    }
  },
  methods: {
    hoverOn() {
      this.hover = true
    },
    hoverOff() {
      this.hover = false
    },
  },
  computed: {
    hoverVisible() {
      return {
        hover: this.hover === true,
      }
    },
  },
}
</script>


<style lang="scss">
@import 'main.scss';

img {
  opacity: 1;
  margin: 0;
  position: absolute;
  transition: all 500ms ease;
}

img.hover {
  opacity: 0;
  z-index: -1;
}

.project {
  border: 5px solid $green;
  position: relative;
  overflow: hidden;
  transition: all 500ms ease;
  object-fit: cover;
  max-width: 650px;

  h2 {
    background-color: $green;
    color: white;
    text-align: center;
    padding: 3px;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  &--description.hover,
  &--links.hover {
    opacity: 1;
  }

  &--description {
    padding: 0 40px;
    text-align: justify;
    opacity: 0;
    font-size: 20px;
    transition: all 500ms ease;
  }

  &--links {
    display: flex;
    justify-content: center;
    text-align: center;
    opacity: 0;
    transition: all 500ms ease;

    i {
      font-size: 4vw;
      padding: 10px;
      color: $green;
      display: block;
    }
    a {
      color: $green;
      padding: 20px;
    }
  }
}

@media screen and (max-width: $medium) {
  .project {
    &--description {
      font-size: 24 px;
    }

    &--links {
      i {
        font-size: 10vw;
      }
    }
  }
}

@media screen and (max-width: $small) {
  img {
    display: none;
  }

  h2 {
    font-size: 16px;
  }

  .project {
    overflow: auto;

    &--description {
      font-size: 24px;
      opacity: 1;
      font-size: 14px;
      padding: 0 10px;
    }

    &--links {
      flex-direction: column;
      opacity: 1;
      i {
        font-size: 10vw;
        padding: 0;
      }
    }
  }
}
</style>
