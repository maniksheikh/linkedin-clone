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
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
}

.menu-container {
    padding-bottom: 1.25rem;
    display: block;
    width: 100vw;
    max-width: 100vw;
    box-sizing: border-box;
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: white;
    border-radius: 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    margin: 0;
    overflow: hidden;
    z-index: 999;

    @media (min-width: 640px) {
        display: none;
    }
}

.menu-list {
    display: block;
    color: #535251;
    font-size: 14px;
    padding: 0.75rem;
    text-align: center;
    font-weight: 600;
    width: 100%;
    margin: 0;
    list-style: none;
    background: white;
}

.menu-item {
    padding: 0.5rem 1rem;
    font-weight: 600;
    transition: background-color 0.2s;
    border-bottom: 1px solid #f0f0f0;
}

.menu-item:last-child {
    border-bottom: none;
}

.menu-item:hover {
    background-color: #f8f9fa;
    border-radius: 0.375rem;
}

.menu-item a {
    color: #535251;
    text-decoration: none;
    display: block;
    width: 100%;
}

.try-free-button {
    display: flex;
    justify-content: center;
    margin: 1rem auto;
    background-color: #ff4f00;
    color: white;
    font-size: 14px;
    border-radius: 9999px;
    padding: 0.625rem 1rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    max-width: 200px;
    width: 100%;
}

.try-free-button:hover {
    background-color: #e64500;
}

.button-link {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
    width: 100%;
    justify-content: center;
}

.icon {
    margin-left: 0.25rem;
    width: 1rem;
    height: 1rem;
    object-fit: cover;
    border-radius: inherit;
}
</style>