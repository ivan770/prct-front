<template>
    <div class="page-wrapper">
        <section class="registration-section">
            <div class="registration-form-wrapper">
                <object class="registration-form-image" type="image/svg+xml" data="@/assets/Uran.svg" />

                <div class="form-card flex-column">
                    <div class="form-wrapper">
                        <h2 class="form-title">Електронна черга для польоту у космос</h2>

                        <form class="registration-form" action="submit">
                            <label class="form-label" for="name">Ім'я</label>
                            <input class="form-input" type="text" id="name" name="name" required placeholder="Ваше ім'я" />

                            <label class="form-label" for="phone">Телефон</label>
                            <input class="form-input" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="+38 (_) __ __ __" required />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "MainForm"
}
</script>

<style scoped>
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
</style>
