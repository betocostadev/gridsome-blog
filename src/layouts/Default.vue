<template>
  <div class="container" :class="theme">
    <div class="layout">
      <header class="header">
        <strong>
          <g-link class="main__link" to="/">{{ $static.metadata.siteName.toUpperCase() }}</g-link>
        </strong>
        <nav class="nav">
          <g-link class="nav__link" exact to="/">HOME</g-link>
          <g-link class="nav__link" to="/about/">ABOUT</g-link>
          <span class="span-btn material-icons" role="button" aria-label="Change theme" title="Change theme" @click="toggleTheme">
            {{ theme === 'dark-theme' ? 'beach_access' : 'nights_stay' }}
          </span>
        </nav>
      </header>
        <slot />
      <Footer/>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from '@/components/Footer'
export default {
  data() {
    return {
      theme: 'dark-theme',
    }
  },

  components: {
    Footer,
  },

  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark-theme' ? 'light-theme' : 'dark-theme'
      localStorage.setItem('theme', this.theme)
    }
  },

  created () {
    this.theme = localStorage.getItem('theme') || 'dark-theme'
  },
}
</script>

<style src="../css/main.css" />
