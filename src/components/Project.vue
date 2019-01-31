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
    <p v-html="description" class="project--description">{{description}}</p>
    <div class="project--links">
      <a :href="codePath" target="_blank">
        <i class="fab fa-github"></i>See the Code
      </a>
      <a :href="livePath" target="_blank">
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

.hover {
  /*background: rgba(0, 0, 0, 0.85);
  color: white;*/
  transition: opacity 1s;
}

img {
  opacity: 1;
  height: 100%;
  margin: 0;
  position: absolute;
  transition: all 500ms ease;
}

img.hover {
  opacity: 0;
  z-index: -1;
}

.project {
  width: 40%;
  margin: 15px;
  border: 5px solid $green;
  position: relative;
  overflow: hidden;
  transition: all 1s;

  h2 {
    background-color: $green;
    color: white;
    text-align: center;
    padding: 3px;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  &--description {
    padding: 0 40px;
    text-align: justify;
  }

  &--links {
    display: flex;
    justify-content: center;
    text-align: center;

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
</style>
