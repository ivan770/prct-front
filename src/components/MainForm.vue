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
                    <div class="form-wrapper">
                        <h2 class="form-title">Електронна черга для польоту у космос</h2>

                        <form class="registration-form flex-column" action="submit">
                            <label class="form-label" for="name">Ім'я</label>
                            <input class="form-input" type="text" id="name" name="name" required placeholder="Ваше ім'я" />

                            <label class="form-label" for="phone">Телефон</label>
                            <input class="form-input" type="tel" id="phone" name="phone" pattern="+[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder="380-00-000-00-00" required />

                            <label class="form-label" for="select">Планета</label>
                            <select class="form-input form-input-select" id="planet" name="planet" required>
                                <option value="venus">Венера</option>
                                <option value="earth">Земля</option>
                                <option value="mars">Марс</option>
                                <option value="mercury">Меркурій</option>
                                <option value="neptune">Нептун</option>
                                <option value="uranus" selected>Уран</option>
                            </select>

                            <button class="form-submit-button" type="submit">Зареєструватися</button>
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
