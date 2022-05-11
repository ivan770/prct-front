<template>
    <MainHeader />
    <MainForm />
    <MainFooter />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainForm from "@/components/MainForm.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
    name: "App",
    components: {
        MainHeader,
        MainForm,
        MainFooter,
    },
};
</script>

<style>
#app {
  font-family: "Roboto";
  background-image: url("@/assets/Bg.svg");
  background-size: cover;
  min-width: 340px;
  height: 100%;
}

.secondary-text {
  color: var(--main-text-color);
  font-size: 14px;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.space-between {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
}

:root {
  --main-text-color: #566f96;
  --button-dimmed: #aedbce;
  --button-active: #30c598;
}

html,
body {
  height: 100%;
}
</style>
