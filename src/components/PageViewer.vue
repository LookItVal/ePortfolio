<template>
    <component :is="selectedPageType"/>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import HomePage from './HomePage.vue'; // Import your components
import PortfolioPage from './PortfolioPage.vue';
import ResumePage from './ResumePage.vue';

export default defineComponent({
    props: {
        page: {
            type: Number,
            required: true
        }
    },
    computed: {
        selectedPageType() {
            const page = this.page;
            if (page === 0) return HomePage;
            if (page === 1) return PortfolioPage;
            if (page === 2) return ResumePage;
            return null;
        }
    }
});
</script>