<template>
  <div
    id="admin-container"
    class="admin-container"
  >
    <button
      class="menu-button-1 button svs-button-transparent"
      style="font-size: 1.5em;"
      @click="toggleDrawer()"
    >
      <span><i class="fas fa-angle-right" /><i class="fas fa-angle-right" /><i class="fas fa-angle-right" /></span>
    </button>
    <button
      class="menu-button-2 button svs-button-transparent"
      style="font-size: 1.5em;"
      @click="toggleDrawer()"
    >
      <span><i class="fas fa-angle-right" /><i class="fas fa-angle-right" /><i class="fas fa-angle-right" /></span>
    </button>
    <drawer
      ref="sidenav"
      class="admin-drawer"
    >
      <template v-slot:aside>
        <div
          class="menu"
          style="width: auto; max-width: 300px; overflow: hidden;"
        >
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li
              v-for="route in routes"
              :key="route.name"
              @click="toggleDrawer()"
            >
              <router-link :to="'/admin/' + route.path">
                {{ route.meta.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </template>
      <template v-slot:content>
        <div class="router-view admin-router-view">
          <router-view />
        </div>
      </template>
    </drawer>
    <!-- {{ $refs.sidenav }} -->
  </div>
</template>

<script>

import { ADMIN_ROUTES } from "../../router/admin-router"

export default {
  data: function() {
    return {
      routes: ADMIN_ROUTES
    }
  },
  methods: {
    toggleDrawer () {
      this.$refs.sidenav.toggle()
    }
  }
}
</script>

<style scoped lang='scss'>
  #admin-container.admin-container {
    height: calc(100vh - 49px);
    position: relative;
    padding: 0px;
    padding-top: 49px;
    padding-bottom: 0px;


    .admin-drawer {
      height: 100%;
    }
  }

  .menu-button-1  {
    position: absolute;
    top: 25%;
    left: 0;
    z-index: 1;
  }

  .menu-button-2  {
    position: absolute;
    bottom: 25%;
    left: 0;
    z-index: 1;
  }


  .admin-router-view {
    overflow-y: scroll;
    max-height: calc(100vh - 49px);

    & > * {
      padding: 20px 10px;
    }
  }

  .menu {
    background: #f5816be6;
    padding: 10px;
    height: 100%;
    overflow-y: scroll;
  }
</style>
