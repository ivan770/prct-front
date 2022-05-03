<template>
    <header class="secondary-text">
        <div class="nav-bar-wrapper">
            <div class="nav-logo-wrapper">
                <i class="nav-logo"></i>
                <span class="nav-title">My Space</span>
            </div>

            <div class="nav-menu-wrapper">
                <span class="nav-menu-item">Про нас</span>
                <span class="nav-menu-item">Новини</span>
                <span class="nav-menu-item">Блог</span>
                <i class="nav-menu-icon"></i>
            </div>

            <div class="menu-button"></div>
        </div>
    </header>
</template>

<script>
export default {
    name: "MainHeader"
}
</script>

<style scoped>
header {
    max-width: 1440px;
    margin: 0 auto;
}

.nav-bar-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 80px 0 80px;
}

.nav-logo-wrapper {
    position: relative;
    padding-left: 80px;
}

.nav-title {
    display: inline-block;
    font-weight: 700;
    font-size: 18px;
    line-height: 2em;
}

.nav-title::before {
    display: inline-block;
    position: absolute;
    content: "";
    border-left: 1px solid var(--main-text-color);
    width: 10px;
    height: 26px;
    right: 85px;
    top: 5px;
}

.nav-logo {
    position: absolute;
    background-image: url("@/assets/Planet (logo).svg");
    background-position: center;
    background-repeat: no-repeat;
    width: 40px;
    height: 30px;
    left: 5px;
}

.nav-menu-item {
    font-size: 14px;
    line-height: 100%;
    padding-left: 32px;
}

.nav-menu-item:nth-child(3){
    padding-right: 36px;
}

.nav-menu-icon {
    display: inline-block;
    background-image: url("@/assets/icons/Icon.svg");
    background-position: center;
    width: 16px;
    height: 16px;
}

.menu-button,
.menu-button::before,
.menu-button::after {
    display: none;
    background-color: var(--main-text-color);
    /*position: absolute;*/
    height: 3px;
    width: 24px;
    margin-right: 10px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
}

.menu-button::before {
    content: '';
    margin-top: -8px;
}

.menu-button::after {
    content: '';
    margin-top: 12px;
}
</style>
