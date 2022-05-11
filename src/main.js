import { createApp } from "vue";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import VueApolloComponents from "@vue/apollo-components";
import { createApolloProvider } from "@vue/apollo-option";
import { createRouter, createWebHistory } from 'vue-router';
import App from "./App.vue";
import IndexView from './views/IndexView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "index",
        component: IndexView,
    }],
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    cache,
    uri: "https://prct-api.elusive.space/graphql",
});

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
});

const app = createApp(App);

app.use(router)
    .use(apolloProvider)
    .use(VueApolloComponents)
    .mount("#app");
