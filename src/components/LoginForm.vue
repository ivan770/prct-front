<template>
    <div class="form-wrapper">
        <h2 class="form-title">Увійти в акаунт</h2>

        <div class="registration-form flex-column">
            <label class="form-label" for="email">Пошта</label>
            <input v-model="loginForm.email" class="form-input" type="email" id="email" name="email" required placeholder="Ваша пошта" />

            <label class="form-label" for="password">Пароль</label>
            <input v-model="loginForm.password" class="form-input" type="password" id="password" name="password" placeholder="********" required />

            <button class="form-submit-button" @click="login">Увійти</button>
            <a class="new-account-link" href="#" @click="store.registrationForm = true">Створити акаунт</a>
        </div>
    </div>
</template>

<script>
import { store } from '@/store/authToken';

export default {
    name: "LoginForm",
    data() {
        return {
            loginForm: {
                email: null,
                password: null
            },
            store
        }
    },
    methods: {
        async login() {
            await fetch("https://prct-api.elusive.space/api/auth", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: this.loginForm.email,
                    password: this.loginForm.password
                })
            }).then(async (response) => {
                if (response.ok) {
                    localStorage.authToken = await response.json()
                        .then((json) => {
                            return json['access_token']
                        })

                    return
                }

                alert("Incorrect credentials.")
            });
        }
    }
}
</script>

<style scoped>
.new-account-link {
    margin-top: 1rem;
}
</style>
