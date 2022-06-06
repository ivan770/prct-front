import { reactive } from 'vue';

export const store = reactive({
    authToken: localStorage.authToken || null,
    registrationForm: true
})
