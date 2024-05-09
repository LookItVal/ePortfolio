<template>
    <div class="home-window">
        <div class="header">
            <h1>Quinn Cecil</h1>
        </div>
        <div class="content">
            <a href="https://www.github.com/lookitval">Github</a>
            <a href="https://www.linkedin.com/in/quinn-cecil-38b44619b">Linkedin</a>
            <a href="https://www.imdb.com/name/nm11999345/">IMDB</a>
        </div> 
        <div class="bottom-note">
            <p>
                Note: this website is under construction and is not even the branch that I have worked on the most.
                The website will not look like this by the end of development and I plan to make it far more elaborate
            </p>
        </div>
    </div>
</template>

<style>
    .home-window {
        display: flex;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        height: 100vh;
        width: 100vw;
    }
    .content {
        display: flex;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    h1 {
        font-size: 5em; /* Adjust this value to your liking */
    }
</style>