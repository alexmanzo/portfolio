<template>
  <div id="projects">
    <project
      :name="projects[0].name"
      :imgPath="projects[0].screenshot"
      :description="projects[0].description"
      :codePath="projects[0].codePath"
      :livePath="projects[0].livePath"
    ></project>
    <project
      :name="projects[1].name"
      :imgPath="projects[1].screenshot"
      :description="projects[1].description"
      :codePath="projects[1].codePath"
      :livePath="projects[1].livePath"
    ></project>
    <project
      :name="projects[2].name"
      :imgPath="projects[2].screenshot"
      :description="projects[2].description"
      :codePath="projects[2].codePath"
      :livePath="projects[2].livePath"
    ></project>
    <project
      :name="projects[3].name"
      :imgPath="projects[3].screenshot"
      :description="projects[3].description"
      :codePath="projects[3].codePath"
      :livePath="projects[3].livePath"
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
            'In my previous career, I managed a student group of 30-40 students to staff up to 100 live productions of sporting events throughout the year.<br><br>Managing availability and scheduling for several events with an array of needs, I wanted to develop an web application that would make this process easier.<br><br>Crew Scheduler allows as user to create all events for the year, and then have students log in to update their availability. When availability is in, the admin can go through an assign crew to events, and go back and edit as needed.',
          codePath: 'https://github.com/alexmanzo/crew-scheduler',
          livePath: 'https://fierce-wildwood-43879.herokuapp.com/',
          screenshot: require('../assets/crew-scheduler.png'),
        },
      ],
    }
  },
}
</script>


<style lang="scss">
@import 'main.scss';

#projects {
  padding-top: 25vh;
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
