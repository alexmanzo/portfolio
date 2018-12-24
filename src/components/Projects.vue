<template>
  <div id="projects">
      <div v-for="(project, index) in projects" :key="index">
          <h3>{{ project.name }}</h3>
          <p>{{project.description}}</p>
          <a href="`${codePath}`" target=_blank>See the Code</a>
          <a href="`${livePath}`" target=_blank>See the Project</a>
      </div>
  </div>
</template>

<script>
export default {
    projects: [
        {
            name: 'Movie Search &ndash; Vue.js',
            description: 'Refactored project to learn Vue.js. Users can search for movies, find out basic details, then disocver more movies through exploring the cast, similar movies, and more',
            codePath: 'https://github.com/alexmanzo/movie-search-vuejs',
            livePath: 'https://hungry-meitner-48277e.netlify.com/'
        },
        {
            name: '',
            description: '',
            codePath: '',
            livePath: '',
            screenshotPath: ''
        }

    ]
}
</script>


<style lang="scss">
</style>
