<template>
  <div class="main-app-wrap">
    <Header/>
    <div class="main-wrap row h-100">
      <div class="main-sidebar col-2 border">
        <Sidebar/>
      </div>

      <div class="main-content col-10">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import './assets/styles/global.scss'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
export default {
  name: "App",
  components: {Sidebar, Header}
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
.main-app-wrap {
  height: calc(100% - 80px);
}
//#nav {
//  padding: 30px;
//
//  a {
//    font-weight: bold;
//    color: #2c3e50;
//
//    &.router-link-exact-active {
//      color: #42b983;
//    }
//  }
//}
</style>
