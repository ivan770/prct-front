<template>
    <MainHeader />
    <MainForm />
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainForm from './components/MainForm.vue'

export default {
    name: 'App',
    components: {
        MainHeader,
        MainForm
    }
}
</script>

<style>
#app {
    font-family: "Roboto";
    background-image: url("@/assets/Bg.svg");
    background-size: cover;
    min-width: 340px;
    height: 100%;
}
</style>
