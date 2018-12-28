<template>
  <div id="resume">
    <header>
      <router-link :to="{name: 'home'}">
        <app-header></app-header>
      </router-link>
      <app-nav></app-nav>
    </header>
    <app-resume></app-resume>
  </div>
</template>

<script>
import Resume from '@/components/Resume.vue'
export default {
  name: 'resume',
  components: {
    'app-resume': Resume,
  },
}
</script>
