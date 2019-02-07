<template>
  <div id="projects">
    <project
      v-for="project in projects"
      :key="project.name"
      :name="project.name"
      :imgPath="project.screenshot"
      :description="project.description"
      :codePath="project.codePath"
      :livePath="project.livePath"
    ></project>
  </div>
</template>

<script>
import project from '@/components/Project.vue'

export default {
  components: {
    project,
  },
  data() {
    return {
      hover: false,
      projects: [
        {
          name: 'All-Gender Bathroom Finder',
          description:
            'This is a passion project that fulfills a need for myself and other non-binary and trans identifying individuals. <br><br> When on any given day you can be perceived as either male or female, something as simple as going to the bathroom can become a huge safety issue. This web app is a resource for finding all-gender bathrooms.',
          codePath: 'https://github.com/alexmanzo/bathroom-finder-app',
          livePath: 'https://bathroom-finder.alexmanzo.me/',
          screenshot: require(`../assets/bathroom-finder.png`),
        },
        {
          name: `Movie Search &ndash; Vue.js`,
          description:
            'Refactored project to learn Vue.js. Users can search for movies, find out basic details, then disocver more movies through exploring the cast, similar movies, and more.<br><br>One significant difference from the React version is the creation of a custom slider component.',
          codePath: 'https://github.com/alexmanzo/movie-search-vuejs',
          livePath: 'https://movie-search-vue.alexmanzo.me/',
          screenshot: require('../assets/movie-search-vue.png'),
        },
        {
          name: 'Movie Search &ndash; React',
          description: `This is a refactored version of a <a href="https://alexmanzo.github.io/movie-search-jquery/index.html" target=_blank>jQuery project</a>. Users can search for movies, find out basic details, then disocver more movies through exploring the cast, similar movies, and more.`,
          codePath: 'https://github.com/alexmanzo/movie-search-',
          livePath: 'https://movie-search-react.alexmanzo.me/',
          screenshot: require('../assets/movie-search-react.png'),
        },
        {
          name: 'Crew Scheduler',
          description:
            'Built for a real-world application managing availability and scheduling for live video production events. Crew Scheduler allows as user to create events, update availability, and  assign production crews.',
          codePath: 'https://github.com/alexmanzo/crew-scheduler',
          livePath: 'https://fierce-wildwood-43879.herokuapp.com/',
          screenshot: require('../assets/crew-scheduler.png'),
        },
        {
          name: 'Design to Code - Onfo',
          description:
            'Self-assigned challenge to pick a web design of Dribbble and translate to code.',
          livePath: 'https://codepen.io/alexmanzo/pen/wNPqxR',
          screenshot: require('../assets/onfo-screenshot.png'),
        }
      ],
    }
  },
}
</script>


<style lang="scss">
@import 'main.scss';

#projects {
  padding: 25vh 0 10vh;
  width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(3, 50vh);
  grid-gap: 25px;
  justify-content: center;
}

@media screen and (max-width: $medium) {
  #projects {
    padding: 50vh 0 10vh;
    grid-template-columns: 90%;
    grid-template-rows: repeat(5, 65vh);
  }
}

@media screen and (max-width: $small) {
  #projects {
    padding: 30vh 0 1vh;
  }
}
</style>
