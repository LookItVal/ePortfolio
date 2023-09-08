<template>
    <nav
      :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">QVC</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="(page,index) in pages" :key="index" class="nav-item">
            <a
              class="nav-link"
              :class="{active: activePage == index}"
              aria-current="page"
              :href="page.link.url"
              :title="`This link goes to the ${page.link.text} page`"
              @click.prevent="navLinkClick(index)"
            >{{ page.link.text }}</a>
          </li>
        </ul>
        <form class="d-flex">
          <button
            class="btn btn-primary"
            @click.prevent="changeTheme()"
          >Toggle</button>
        </form>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    name: 'MainNavbar',
    props: {
      pages: {
        type: Array as PropType<{ link: { text: string; url: string }; }[]>,
        required: true
      },
      activePage: {
        type: Number,
        required: true
      },
      navLinkClick: {
        type: Function as PropType<(index: number) => void>,
        required: true
      }
    },
    data() {
      return {
        theme: 'light',
      };
    },
    methods: {
      changeTheme() {
        let theme = 'light';
  
        if (this.theme === 'light') {
          theme = 'dark';
        }
  
        this.theme = theme;
      }
    }
  });
  </script>  