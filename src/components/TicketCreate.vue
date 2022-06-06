<template>
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
</template>

<script>
export default {
    name: "TicketCreate"
}
</script>
