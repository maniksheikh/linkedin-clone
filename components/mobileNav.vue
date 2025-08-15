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
    padding-left: 0;
    padding-right: 0;
    overflow: hidden;
    z-index: 1001;
    border-bottom: 1px solid #e0e0e0;

    @media (min-width: 769px) {
        display: none !important;
    }

    @media (max-width: 480px) {
        top: 56px;
        width: 100vw;
        max-width: 100vw;
    }

    @media (max-width: 375px) {
        top: 52px;
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
    
    @media (max-width: 480px) {
        font-size: 13px;
        padding: 0.5rem;
    }
    
    @media (max-width: 375px) {
        font-size: 12px;
        padding: 0.4rem;
    }
}

.menu-item {
    padding: 0.5rem 1rem;
    font-weight: 600;
    transition: background-color 0.2s;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    box-sizing: border-box;
    
    @media (max-width: 480px) {
        padding: 0.4rem 0.75rem;
    }
    
    @media (max-width: 375px) {
        padding: 0.35rem 0.5rem;
    }
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
    padding: 0.5rem 0;
    
    @media (max-width: 480px) {
        padding: 0.3rem 0;
        font-size: 13px;
    }
    
    @media (max-width: 375px) {
        padding: 0.25rem 0;
        font-size: 12px;
    }
}

.try-free-button {
    display: flex;
    justify-content: center;
    margin: 1rem auto 0.5rem;
    background-color: #0a66c2;
    color: white;
    font-size: 14px;
    border-radius: 24px;
    padding: 0.625rem 1rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    max-width: 180px;
    width: 90%;
    box-sizing: border-box;
    
    @media (max-width: 480px) {
        font-size: 13px;
        padding: 0.5rem 0.75rem;
        max-width: 160px;
        margin: 0.75rem auto 0.25rem;
    }
    
    @media (max-width: 375px) {
        font-size: 12px;
        padding: 0.4rem 0.6rem;
        max-width: 140px;
        margin: 0.5rem auto 0.25rem;
    }
}

.try-free-button:hover {
    background-color: #084d7a;
    transform: translateY(-1px);
}

.button-link {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
    width: 100%;
    justify-content: center;
    gap: 0.25rem;
}

.icon {
    margin-left: 0.25rem;
    width: 1rem;
    height: 1rem;
    object-fit: cover;
    border-radius: inherit;
    
    @media (max-width: 480px) {
        width: 0.875rem;
        height: 0.875rem;
    }
    
    @media (max-width: 375px) {
        width: 0.75rem;
        height: 0.75rem;
    }
}
</style>