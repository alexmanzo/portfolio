<template>
  <div id="contact">
    <header>
      <router-link :to="{name: 'home'}">
        <app-header></app-header>
      </router-link>
      <app-nav></app-nav>
    </header>
    <app-contact></app-contact>
  </div>
</template>

<script>
import Contact from '@/components/Contact.vue'
export default {
  name: 'contact',
  components: {
    'app-contact': Contact,
  },
}
</script>
