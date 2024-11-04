<template>
    <div class="menu-container">
        <ul class="menu-list">
            <li class="menu-item">
                <nuxt-link to="#">Use Cases</nuxt-link>
            </li>
            <li class="menu-item">
                <nuxt-link to="#">Features</nuxt-link>
            </li>
            <li class="menu-item">
                <nuxt-link to="/pricing">Pricing</nuxt-link>
            </li>
            <li class="menu-item">
                <nuxt-link to="#">Affiliates</nuxt-link>
            </li>
            <li class="menu-item">
                <nuxt-link to="#">Blog</nuxt-link>
            </li>
        </ul>

        <button class="try-free-button">
            <nuxt-link to="/" aria-label="Try For Free" title="Try For Free" class="button-link">
                <span>Try For Free</span>
                <img src="https://framerusercontent.com/images/QDgxMHJz2vKvFSMvhZpA6xplIBM.svg" alt="" class="icon" />
            </nuxt-link>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShowMobileNav: false
        };
    }
};

</script>

<style>
.menu-container {
    padding-bottom: 1.25rem;
    display: none;

    @media (min-width: 640px) {
        display: block;
    }
}

.menu-list {
    display: block;
    color: #535251;
    font-size: 14px;
    padding: 0.75rem;
    text-align: center;
    font-weight: 600;
}

.menu-item {
    padding: 0.25rem 0.5rem;
    font-weight: 600;
    transition: background-color 0.2s;
}

.menu-item:hover {
    border-radius: 0.375rem;
}

.try-free-button {
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: #ff4f00;
    color: white;
    font-size: 14px;
    border-radius: 9999px;
    padding: 0.625rem 1rem;
}

.button-link {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
}

.icon {
    margin-left: 0.25rem;
    width: 1rem;
    height: 1rem;
    object-fit: cover;
    border-radius: inherit;
}
</style>