<template>
    <main-navbar
        :pages="pages"
        :active-page="activePage"
        :nav-link-click="(index) => activePage = index"
    ></main-navbar>

    <page-viewer
        :page=activePage
    ></page-viewer>
</template>

<script lang="ts">
import MainNavbar from './components/MainNavbar.vue';
import PageViewer from './components/PageViewer.vue';

export default {
    components: {
        MainNavbar,
        PageViewer
    },
    data() {
        return {
            activePage: 0 as number,
            pages: [
                {
                    link: {text:'Home', url: 'index.html'} as {text:string, url:string},
                },
                {
                    link: {text: 'Portfolio', url: 'portfolio.html'} as {text:string, url:string},
                },
                {
                    link: {text: 'Resume', url: 'resume.html'} as {text:string, url:string},
                }
            ] 
        }
    }
} 
</script>
