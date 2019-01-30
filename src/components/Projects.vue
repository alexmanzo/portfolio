<template>
  <div id="projects">
    <div v-for="(project, index) in projects" :key="index" class="project">
      <img :src="project.screenshot" :alt="project.name" />
      <h2 v-html="project.name">{{ project.name }}</h2>
      <p v-html="project.description" class="project--description">{{project.description}}</p>
      <div class="project--links">
        <a href="`${codePath}`" target="_blank">
          <i class="fab fa-github"></i>See the Code
        </a>
        <a href="`${livePath}`" target="_blank">
          <i class="fas fa-laptop-code"></i>See the Demo
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'All-Gender Bathroom Finder',
          description:
            'This is a passion project that fulfills a need for myself and other non-binary and trans identifying individuals. <br><br> When on any given day you can be perceived as either male or female, something as simple as going to the bathroom can become a huge safety issue. This web app is a resource for finding all-gender bathrooms.',
          codePath: 'https://github.com/alexmanzo/bathroom-finder-app',
          livePath: 'https://bathroom-finder.alexmanzo.me/',
          screenshot: '/src/assets/bathroom-finder.png',
        },
        {
          name: `Movie Search &ndash; Vue.js`,
          description:
            'Refactored project to learn Vue.js. Users can search for movies, find out basic details, then disocver more movies through exploring the cast, similar movies, and more.<br><br>One significant difference from the React version is the creation of a custom slider component.',
          codePath: 'https://github.com/alexmanzo/movie-search-vuejs',
          livePath: 'https://movie-search-vue.alexmanzo.me/',
          screenshot: '/src/assets/movie-search-vue.png',
        },
        {
          name: 'Movie Search &ndash; React',
          description: `This is a refactored version of a <a href="https://alexmanzo.github.io/movie-search-jquery/index.html" target=_blank>jQuery project</a>. Users can search for movies, find out basic details, then disocver more movies through exploring the cast, similar movies, and more.`,
          codePath: 'https://github.com/alexmanzo/movie-search-',
          livePath: 'https://movie-search-react.alexmanzo.me/',
          screenshot: '/src/assets/movie-search-react.png',
        },
        {
          name: 'Crew Scheduler',
          description:
            'In my previous career, I managed a student group of 30-40 students to staff up to 100 live productions of sporting events throughout the year.<br><br>Managing availability and scheduling for several events with an array of needs, I wanted to develop an web application that would make this process easier.<br><br>Crew Scheduler allows as user to create all events for the year, and then have students log in to update their availability. When availability is in, the admin can go through an assign crew to events, and go back and edit as needed.',
          codePath: 'https://github.com/alexmanzo/crew-scheduler',
          livePath: 'https://fierce-wildwood-43879.herokuapp.com/',
          screenshot: '/src/assets/crew-scheduler.png',
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

.project {
  width: 40%;
  margin: 15px;
  border: 5px solid $green;

  h2 {
    background-color: $green;
    color: white;
    text-align: center;
    padding: 3px;
    margin-block-start: 0;
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
      color: green;
      padding: 20px;
    }
  }
}
</style>
