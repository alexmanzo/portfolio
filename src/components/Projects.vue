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
    data() {
        return {

        
    projects: [
        {
            name: 'All-Gender Bathroom Finder',
            description: 'This project stems from a drive to fulfill a personal need, and a need for many other non-binary and trans identifying individuals. When on any given day you can be perceived as either male or female, something as simple as going to the bathroom can become a huge safety issue. My spouse and I try to frequent locations that offer gender-netural bathrooms, but it can be hard remembering all of those spaces.',
            codePath: 'https://github.com/alexmanzo/bathroom-finder-app',
            livePath: 'https://bathroom-finder.alexmanzo.me/',
            screenshotPath: '@/assets/bathroom-finder.png'
        },
        {
            name: 'Movie Search &ndash; Vue.js',
            description: 'Refactored project to learn Vue.js. Users can search for movies, find out basic details, then disocver more movies through exploring the cast, similar movies, and more. One large difference from the React version is the creation of a custom slider component.',
            codePath: 'https://github.com/alexmanzo/movie-search-vuejs',
            livePath: 'https://movie-search-vue.alexmanzo.me/',
            screenshotPath: '@/assets/movie-search-vue.png'
        },
        {
            name: 'Movie Search &ndash; React',
            description: 'This is a refactored version of a <a href="https://alexmanzo.github.io/movie-search-jquery/index.html" target=_blank>jQuery project</a>. Users can search for movies, find out basic details, then disocver more movies through exploring the cast, similar movies, and more.',
            codePath: 'https://github.com/alexmanzo/movie-search-',
            livePath: 'https://movie-search-react.alexmanzo.me/',
            screenshotPath: '@/assets/movie-search-react.png'
        },
        {
            name: 'Crew Scheduler',
            description: 'In my previous career, I managed a student group of 30-40 students to staff up to 100 live productions of sporting events throughout the year. Managing availability and scheduling for several events with an array of needs, I wanted to develop an web application that would make this process easier. Crew Scheduler allows as user to create all events for the year, and then have students log in to update their availability. When availability is in, the admin can go through an assign crew to events, and go back and edit as needed.',
            codePath: 'https://github.com/alexmanzo/crew-scheduler',
            livePath: 'https://fierce-wildwood-43879.herokuapp.com/',
            screenshotPath: '@/assets/crew-scheduler.png'
        },

    ]
        }
    }
}
</script>


<style lang="scss">
</style>
