<template>
  <div class="container" :class="theme">
    <div class="layout">
      <header class="header">
        <strong>
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
          <span v-if="theme === 'dark-theme'" class="span-btn material-icons" @click="toggleTheme">
            beach_access
          </span>
          <span v-else class="span-btn material-icons" @click="toggleTheme">
            nights_stay
          </span>
        </nav>
      </header>
      <slot/>
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
export default {
  data() {
    return {
      theme: 'dark-theme'
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark-theme' ? 'light-theme' : 'dark-theme'
    }
  },
}
</script>

<style src="../css/main.css" />
