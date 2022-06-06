<template>
    <div class="page-wrapper">
        <section class="registration-section">
            <div class="registration-form-wrapper">
                <img
                    svg-inline
                    class="registration-form-image"
                    src="@/assets/Uran.svg"
                />

                <div class="form-card flex-column">
                    <TicketCreate v-if="store.authToken" />
                    <RegistrationForm v-if="!store.authToken && store.registrationForm" />
                    <LoginForm v-if="!store.authToken && !store.registrationForm" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { store } from '@/store/authToken';
import LoginForm from '@/components/LoginForm.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';
import TicketCreate from '@/components/TicketCreate.vue';

export default {
    name: "MainForm",
    components: {
        LoginForm,
        RegistrationForm,
        TicketCreate
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style>
.page-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 80vh;
    max-width: 1440px;
}

.registration-section {
    width: 100%;
}

.registration-form-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.registration-form {
    height: 400px;
}

.registration-form-image {
    height: 100%;
}

.form-card {
    max-width: 515px;
    min-width: 350px;
    height: 580px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 7px 3px beige;
}

.form-wrapper {
    min-width: 50%;
    padding: 48px;
}

.form-title {
    font-size: 36px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
    padding-bottom: 32px;
    min-width: 372px;
}

select, input {
    font-size: 18px;
    line-height: 24px;
    padding: 0 16px;
}

.form-input {
    width: 280px;
    height: 48px;
    border: 1px solid #CED0DB;
    border-radius: 4px;
}

.form-label {
    padding: 24px 0 8px 0;
    font-size: 16px;
    line-height: 16px;
}

.form-label:first-of-type {
    padding-top: 0;
}

.form-input-select {
    appearance: none;
    background-image: url("@/assets/icons/Expand More.svg");
    background-repeat: no-repeat;
    background-position: 95% 50%;
}

.form-submit-button {
    background: var(--button-dimmed);
    border: none;
    border-radius: 4px;
    color: #FFFFFF;
    padding: 9px 24px;
    width: 190px;
    height: 50px;
    margin-top: 40px;
    font-size: 18px;
}

@media screen and (max-width: 720px) {
    .registration-form-image{
        position: absolute;
    }

    .form-card {
        margin: 0 15px;
        min-width: 345px;
    }

    .form-submit-button {
        width: 280px;
    }

    .form-title {
        font-size: 30px;
        line-height: 36px;
        min-width: 300px;
    }
    
    .form-card {
        z-index: 99;
    }

    .form-wrapper {
        padding: 32px;
    }

    .registration-form-wrapper {
        position: relative;
    }
}
</style>
