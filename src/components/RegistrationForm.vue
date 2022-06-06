<template>
    <div class="form-wrapper">
        <h2 class="form-title">Створення акаунту</h2>

        <div class="registration-form flex-column">
            <label class="form-label" for="email">Пошта</label>
            <input v-model="registrationForm.email" class="form-input" type="email" id="email" name="email" required placeholder="Ваша пошта" />

            <label class="form-label" for="password">Пароль</label>
            <input v-model="registrationForm.password" class="form-input" type="password" id="password" name="password" placeholder="********" required />

            <label class="form-label" for="name">Ім'я</label>
            <input v-model="registrationForm.name" class="form-input" type="text" id="name" name="name" required placeholder="Ваше ім'я" />

            <label class="form-label" for="phone">Телефон</label>
            <input v-model="registrationForm.phone" class="form-input" type="tel" id="phone" name="phone" pattern="+[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder="380-00-000-00-00" />

            <button class="form-submit-button" @click="register">Зареєструватися</button>
            <a class="existing-account-link" href="#" @click="store.registrationForm = false">В мене вже є акаунт</a>
        </div>
    </div>
</template>

<script>
import { store } from '@/store/authToken';

export default {
    name: "RegistrationForm",
    data() {
        return {
            registrationForm: {
                email: null,
                password: null,
                name: null,
                phone: null
            },
            store
        }
    },
    methods: {
        async register() {
            await fetch("https://prct-api.elusive.space/api/register", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: this.registrationForm.email,
                    password: this.registrationForm.password,
                    name: this.registrationForm.name,
                    phone: this.registrationForm.phone
                })
            }).then(async (response) => {
                if (response.ok) {
                    localStorage.authToken = await response.json()
                        .then((json) => {
                            return json['access_token']
                        })

                    return
                }

                alert((await response.json()).message)
            });
        }
    }
}
</script>

<style scoped>
.existing-account-link {
    margin-top: 1rem;
}
</style>
