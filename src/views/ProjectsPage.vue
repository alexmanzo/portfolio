<template>
  <div id="projects">
    <header>
      <router-link :to="{name: 'home'}">
        <app-header></app-header>
      </router-link>
      <app-nav></app-nav>
    </header>
    <app-projects></app-projects>
  </div>
</template>

<script>
import Projects from '@/components/Projects.vue'
export default {
  name: 'projects',
  components: {
    'app-projects': Projects,
  },
}
</script>
