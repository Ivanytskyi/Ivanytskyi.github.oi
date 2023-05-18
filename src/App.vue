<template>
  <div class="main-app-wrap">
    <Header />
    <div class="main-wrap row h-100">
      <div class="main-sidebar col-2 bg-light">
        <Sidebar />
      </div>

      <div class="main-content col-10">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import './assets/styles/global.scss'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default {
  name: 'App',
  components: { Sidebar, Header }
}
</script>

<style lang="scss">
#app, body, html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

body {
  background: #f2f5f4;

}

.main-app-wrap {
  height: calc(100% - 80px);
}

.main-sidebar {
  -webkit-box-shadow: 0 6px 21px 0 rgba(34, 60, 80, 0.15);
  -moz-box-shadow: 0 6px 21px 0 rgba(34, 60, 80, 0.15);
  box-shadow: 0 6px 21px 0 rgba(34, 60, 80, 0.15);
}
</style>
