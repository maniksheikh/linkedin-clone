<template>
    <div class="menu-container">
        <ul class="menu-list">
            <li class="menu-item">
                <a @click="navigateToFeed" class="menu-link">
                    <span>Home</span>
                </a>
            </li>
            <li class="menu-item">
                <a @click="navigateToProfile" class="menu-link">
                    <span>Profile</span>
                </a>
            </li>
            <li class="menu-item">
                <a @click="closeMobileMenu" class="menu-link">
                    <span>Messaging</span>
                </a>
            </li>
            <li class="menu-item">
                <a @click="closeMobileMenu" class="menu-link">
                    <span>Notifications</span>
                </a>
            </li>
        </ul>
        <button v-if="isUserAuth" @click="logout" class="sign-in-button logout-btn">
            <span>Logout</span>
        </button>
        <button v-else @click="goToSignIn" class="sign-in-button">
            <span>Sign In</span>
        </button>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            isShowMobileNav: false
        };
    },
    computed: {
        ...mapState(['user']),
        isUserAuth() {
            return this.$store.getters.isAuthenticated;
        }
    },

    methods: {
        async logout() {
            try {
                await this.$store.dispatch('logout');
                this.$router.push('/');
                this.closeMobileMenu();
            } catch (error) {
                console.error(error);
            }
        },
        goToSignIn() {
            this.$router.push('/');
            this.closeMobileMenu();
        },
        navigateToProfile() {
            this.$router.push('/profile');
            this.closeMobileMenu();
        },
        navigateToFeed() {
            this.$router.push('/feed');
            this.closeMobileMenu();
        },
        closeMobileMenu() {
            this.$emit('close-mobile-nav');
        }
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
    overflow: visible;
    z-index: 1001;
    border-bottom: 1px solid #e0e0e0;
    visibility: visible;
}

.menu-list {
    display: block;
    color: #535251;
    font-size: 16px;
    padding: 0.75rem;
    text-align: center;
    font-weight: 600;
    width: 100%;
    margin: 0;
    list-style: none;
    background: white;
    visibility: visible;
}

.menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    transition: background-color 0.2s;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    text-align: center;
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
}

.menu-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: #535251;
    text-decoration: none;
    padding: 1rem 0;
    font-weight: 500;
    transition: color 0.2s ease;
    font-size: 16px;
    text-align: center;
    width: 100%;
}

.menu-link:hover {
    color: #0a66c2;
}

.menu-icon {
    width: 22px;
    height: 22px;
    color: #666;
    transition: color 0.2s ease;
    flex-shrink: 0;
    display: block;
    margin: 0 auto;
    text-align: center;
}

.menu-link:hover .menu-icon {
    color: #0a66c2;
}

.menu-link span {
    text-align: center;
    display: block;
    margin: 0;
    line-height: 1.2;
    font-size: 16px;
}

.sign-in-button {
    display: flex;
    justify-content: center;
    margin: 1rem auto 0.5rem;
    background-color: #0a66c2;
    color: white;
    font-size: 15px;
    border-radius: 24px;
    padding: 0.625rem 1rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    max-width: 180px;
    width: 90%;
    box-sizing: border-box;
    visibility: visible;
}

.sign-in-button:hover {
    background-color: #084d7a;
    transform: translateY(-1px);
}

.button-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: inherit;
    text-decoration: none;
    width: 100%;
    justify-content: center;
    gap: 0.5rem;
    text-align: center; 
    span {
        display: block;
        white-space: nowrap;
        overflow: visible;
        text-overflow: initial;
        line-height: 1.2;
        text-align: center;
        margin: 0;
    }
}

.button-icon {
    margin-right: 0;
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    display: block;
    margin: 0 auto;
    text-align: center;
}
</style>