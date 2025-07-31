<template>
  <div class="container">
    <div class="main-container">
      <div class="navbar-content">
        <div class="content">
          <div>
            <svg id="main-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
              fill="currentColor" class="mercado-match" width="45" height="45" focusable="false">
              <path
                d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
              </path>
            </svg>
          </div>
          <div class="search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor"
              class="search-btn" width="19" height="19" focusable="false">
              <path
                d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z">
              </path>
            </svg>
            <input class="input" type="text" placeholder="Search here...." />
          </div>
        </div>
        <!-- Nabvber -->
        <div class="nav">
          <div class="navber-contents">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="mercado-match" width="26" height="26" focusable="false">
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
            </svg>
            <span>Home</span>
          </div>
          <div class="navber-contents">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="mercado-match" width="26" height="26" focusable="false">
              <path
                d="M12 6.5a4.5 4.5 0 114.5 4.5A4.49 4.49 0 0112 6.5zm6 6.5h-3a3 3 0 00-3 3v6h9v-6a3 3 0 00-3-3zM6.5 6A3.5 3.5 0 1010 9.5 3.5 3.5 0 006.5 6zm1 9h-2A2.5 2.5 0 003 17.5V22h7v-4.5A2.5 2.5 0 007.5 15z">
              </path>
            </svg>
            <span>My Network</span>
          </div>
          <div class="navber-contents">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="mercado-match" width="26" height="26" focusable="false">
              <path
                d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z">
              </path>
            </svg>
            <span>Jobs</span>
          </div>
          <div class="navber-contents">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="mercado-match" width="26" height="26" focusable="false">
              <path
                d="M22 8a6 6 0 01-3 5.22A7 7 0 0012 7H8a7 7 0 00-1.95.28A6 6 0 0112 2h4a6 6 0 016 6zm-4 6v.48a6 6 0 01-2.69 5L10 23v-3H8A6 6 0 018 8h4a6 6 0 016 6zM8 14a1 1 0 10-1 1 1 1 0 001-1zm3 0a1 1 0 10-1 1 1 1 0 001-1zm3 0a1 1 0 10-1 1 1 1 0 001-1z">
              </path>
            </svg>
            <span>Messaging</span>
          </div>
          <div class="navber-contents">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="mercado-match" width="26" height="26" focusable="false">
              <path
                d="M22 19.24a3.46 3.46 0 01-.09.78l-.22 1-6.76-1.51A2.16 2.16 0 0115 20a2 2 0 11-3.53-1.28L2 16.62l.22-1A4.45 4.45 0 014 13.12l1.22-.93 15.46 3.44.7 1.36a5 5 0 01.62 2.25zm-1.49-10.4a6.29 6.29 0 00-4.92-6.69A6.76 6.76 0 0014.18 2a6.29 6.29 0 00-5.9 4.12l-2 5.27 13.8 3.08z">
              </path>
            </svg>
            <span>Notifications</span>
          </div>
          <li v-if="!isUserAuth" class="item">
            <button class="btn dropdown" @click.stop="toggle">
              <img src="/img/profile-img.jpg" alt="" class="profile" />
              <div v-if="visible" class="dropdown-menu">
                <div class="profile-details">
                  <div class="box">
                    <img src="/Manik.jpg" alt="profile"/>
                    <span class="title">{{ userName }}</span>
                  </div>
                </div>
                <div class="profile-item">
                  <div class="item-box">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                      class="style-scope yt-icon" style="
                          pointer-events: none;
                          display: block;
                          width: 20;
                          height: 20;
                        ">
                      <g class="style-scope yt-icon">
                        <path
                          d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"
                          class="style-scope yt-icon"></path>
                      </g>
                    </svg>
                    <h4>Settings & privacy</h4>
                  </div>
                  <div class="item-box">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                      class="style-scope yt-icon" style="
                          pointer-events: none;
                          display: block;
                          width: 24;
                          height: 24;
                        ">
                      <g class="style-scope yt-icon">
                        <path
                          d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
                          class="style-scope yt-icon"></path>
                      </g>
                    </svg>
                    <h4>Help & support</h4>
                  </div>
                  <div class="item-box" @click.prevent="logout">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                      width="20" height="20" viewBox="0 0 256 256" xml:space="preserve">
                      <defs></defs>
                      <g style="
                            stroke: none;
                            stroke-width: 0;
                            stroke-dasharray: none;
                            stroke-linecap: butt;
                            stroke-linejoin: miter;
                            stroke-miterlimit: 10;
                            fill: none;
                            fill-rule: nonzero;
                            opacity: 1;
                          " transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                        <path
                          d="M 69.313 54.442 c -0.397 0 -0.798 -0.118 -1.147 -0.363 c -0.904 -0.636 -1.122 -1.883 -0.487 -2.786 l 10.118 -14.399 L 67.679 22.495 c -0.635 -0.904 -0.417 -2.151 0.487 -2.786 c 0.904 -0.637 2.151 -0.417 2.786 0.486 l 10.926 15.549 c 0.484 0.69 0.484 1.61 0 2.3 L 70.952 53.592 C 70.563 54.146 69.943 54.442 69.313 54.442 z"
                          style="
                              stroke: none;
                              stroke-width: 1;
                              stroke-dasharray: none;
                              stroke-linecap: butt;
                              stroke-linejoin: miter;
                              stroke-miterlimit: 10;
                              fill: rgb(0, 0, 0);
                              fill-rule: nonzero;
                              opacity: 1;
                            " transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                        <path
                          d="M 57.693 30.092 c 1.104 0 2 -0.896 2 -2 V 2 c 0 -1.104 -0.896 -2 -2 -2 H 9.759 C 9.746 0 9.735 0.003 9.722 0.004 C 9.685 0.004 9.648 0.012 9.611 0.015 c -0.122 0.009 -0.24 0.027 -0.354 0.057 C 9.211 0.083 9.168 0.098 9.124 0.113 C 9.011 0.151 8.903 0.198 8.8 0.255 C 8.775 0.269 8.747 0.274 8.723 0.289 c -0.012 0.007 -0.02 0.018 -0.031 0.025 c -0.13 0.083 -0.252 0.177 -0.36 0.287 C 8.313 0.62 8.299 0.643 8.281 0.662 C 8.196 0.757 8.12 0.859 8.053 0.969 C 8.029 1.009 8.008 1.05 7.987 1.091 C 7.935 1.192 7.893 1.297 7.858 1.407 C 7.845 1.449 7.83 1.489 7.82 1.532 C 7.783 1.683 7.759 1.838 7.759 2 v 69.787 c 0 0.17 0.028 0.333 0.068 0.49 c 0.011 0.043 0.025 0.083 0.039 0.124 c 0.04 0.123 0.091 0.239 0.152 0.35 c 0.019 0.033 0.034 0.068 0.054 0.1 c 0.086 0.135 0.185 0.26 0.3 0.371 c 0.022 0.021 0.047 0.037 0.07 0.058 c 0.102 0.09 0.214 0.169 0.333 0.237 c 0.021 0.012 0.037 0.03 0.058 0.042 l 31.016 16.213 C 40.139 89.925 40.457 90 40.775 90 c 0.359 0 0.718 -0.097 1.036 -0.289 c 0.598 -0.362 0.964 -1.012 0.964 -1.711 V 73.787 h 14.918 c 1.104 0 2 -0.896 2 -2 V 45 c 0 -1.104 -0.896 -2 -2 -2 s -2 0.896 -2 2 v 24.787 H 42.775 V 18.213 c 0 -0.745 -0.414 -1.428 -1.074 -1.772 L 17.902 4 h 37.791 v 24.092 C 55.693 29.196 56.589 30.092 57.693 30.092 z"
                          style="
                              stroke: none;
                              stroke-width: 1;
                              stroke-dasharray: none;
                              stroke-linecap: butt;
                              stroke-linejoin: miter;
                              stroke-miterlimit: 10;
                              fill: rgb(0, 0, 0);
                              fill-rule: nonzero;
                              opacity: 1;
                            " transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                        <path
                          d="M 80.241 38.894 H 47.536 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 32.705 c 1.104 0 2 0.896 2 2 S 81.346 38.894 80.241 38.894 z"
                          style="
                              stroke: none;
                              stroke-width: 1;
                              stroke-dasharray: none;
                              stroke-linecap: butt;
                              stroke-linejoin: miter;
                              stroke-miterlimit: 10;
                              fill: rgb(0, 0, 0);
                              fill-rule: nonzero;
                              opacity: 1;
                            " transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                      </g>
                    </svg>
                    <h4>Log Out</h4>
                  </div>
                </div>
              </div>
              <div class="mr-t">
                <span class="visible mr-t">Me</span>
              </div>
            </button>
          </li>
        </div>
        <!-- OutSide -->
        <div class="outside">
          <div class="outside-content">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
                class="mercado-match" width="25" height="25" focusable="false">
                <path
                  d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z">
                </path>
              </svg>
            </div>
            <div class="work">
              <span>Work</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor"
                class="mercado-match" width="16" height="16" focusable="false">
                <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
              </svg>
            </div>
          </div>
          <p>
            Try Premium for <br /> Free
          </p>
        </div>
        <!-- Mobile Menu Button -->
        <div class="mobile-menu-btn" @click="toggleMobileNav">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </div>
      </div>
    </div>
    <mobile-nav v-show="isShowMobileNav"></mobile-nav>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MobileNav from '~/components/mobileNav.vue'


export default {
  data() {
    return {
      visible: false,
      isShowMobileNav: false,
      MobileNav
    };
  },
  computed: {
    ...mapState(['user']),
    userName() {
      return this.user ? this.user.displayName : '';
    },
    userEmail() {
      return this.user ? this.user.displayEmail : '';
    },
    isUserAuth() {
      return this.$store.getters.isUserAuth;
    },
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('loggingOut');
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    },
    toggle() {
      this.visible = !this.visible;
    },
    toggleMobileNav() {
      this.isShowMobileNav = !this.isShowMobileNav;
    },
    handleClickOutside(event) {
      const dropdown = this.$el.querySelector('.dropdown-menu');
      const profileButton = this.$el.querySelector('.dropdown');
      if (dropdown && !dropdown.contains(event.target) && !profileButton.contains(event.target)) {
        this.visible = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>

<style lang="scss">

$primary-blue: #0a66c2;
$secondary-blue: #317bb8;
$text-primary: #000000e6;
$text-secondary: #666666;
$text-muted: #8b8888;
$background-white: #ffffff;
$background-light: #f3f2ef;
$background-search: #edf3f8;
$border-color: #d9d9d9;
$hover-color: #e7f3ff;
$shadow-light: 0 2px 4px rgba(0, 0, 0, 0.1);
$shadow-medium: 0 4px 8px rgba(0, 0, 0, 0.1);
$border-radius: 8px;
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 12px;
$spacing-lg: 16px;
$spacing-xl: 20px;
$font-size-xs: 0.75rem;
$font-size-sm: 0.875rem;
$font-size-md: 1rem;
$transition: all 0.2s ease;

* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  font-weight: 400;
  background: $background-light;
}

li,
a {
  text-decoration: none;
  list-style: none;
}

.container {
  width: 100%;
  margin: 0;
  padding: 0;
}

.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: $background-white;
  box-shadow: $shadow-light;
  border-bottom: 1px solid $border-color;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 $spacing-md;
}

.content {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  flex: 1;
  max-width: 450px;
}

#main-logo {
  cursor: pointer;
  color: $primary-blue;
  transition: $transition;
  flex-shrink: 0;
  height: 37px;
  width: 37px;

  &:hover {
    color: $secondary-blue;
  }
}

.search-bar {
  display: flex;
  align-items: center;
  border: 2px solid rgb(241, 234, 234);
  border-radius: $spacing-xl;
  height: 36px;
  width: 100%;
  max-width: 260px;
  padding: 0 $spacing-xs 0 $spacing-sm;
  transition: $transition;

  &:focus-within {
    border-color: $primary-blue;
    box-shadow: 0 0 0 2px rgba(10, 102, 194, 0.1);
  }
}

.search-btn {
  color: $text-secondary;
  margin-right: $spacing-sm;
  flex-shrink: 0;
  margin-left: 6px;
}

.input {
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: $font-size-sm;
  color: $text-primary;
  padding: 0;
  margin-left: 2px;

  &::placeholder {
    color: $text-secondary;
  }

  &:focus {
    outline: none;
  }
}

.nav {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
}

.navber-contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px $spacing-sm;
  cursor: pointer;
  border-radius: $spacing-xs;
  transition: $transition;
  min-width: 70px;

  svg {
    color: $text-secondary;
    margin-bottom: 2px;
    transition: $transition;
  }

  span {
    font-size: $font-size-xs;
    color: $text-muted;
    font-weight: 400;
    transition: $transition;
  }

  &:hover {
    svg {
      color: $primary-blue;
    }
    span {
      color: $primary-blue;
    }
  }

  &:focus {
    outline: 2px solid $primary-blue;
    outline-offset: 2px;
  }
}

.item {
  position: relative;
  margin-left: $spacing-sm;
}

.btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: $spacing-xs;
  transition: $transition;

  &.dropdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: $spacing-sm;
  }

  &:focus {
    outline: 2px solid $primary-blue;
    outline-offset: 2px;
  }
}

.profile {
  border-radius: 50%;
  width: 28px;
  height: 28px;
  object-fit: cover;
  margin-bottom: 2px;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + #{$spacing-sm});
  right: 0;
  background: $background-white;
  border-radius: $border-radius;
  box-shadow: $shadow-medium;
  width: 280px;
  z-index: 1000;
  padding: $spacing-lg;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.profile-details {
  display: flex;
  align-items: center;
  margin-bottom: $spacing-lg;
  padding-bottom: $spacing-md;
  border-bottom: 1px solid $border-color;
}

.box {
  display: flex;
  align-items: center;
  gap: $spacing-md;

  img {
    border-radius: 50%;
    width: 56px;
    height: 56px;
    object-fit: cover;
  }
}

.title {
  font-size: $font-size-md;
  font-weight: 600;
  color: $text-primary;
}

.profile-item {
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;
}

.item-box {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  padding: $spacing-md;
  border-radius: $spacing-xs;
  cursor: pointer;
  transition: $transition;

  svg {
    flex-shrink: 0;
    color: $text-secondary;
    transition: $transition;
  }

  h4 {
    font-size: $font-size-sm;
    font-weight: 400;
    color: $text-primary;
    margin: 0;
    transition: $transition;
  }

  &:hover {
    background: $hover-color;

    svg {
      color: $primary-blue;
    }

    h4 {
      color: $primary-blue;
    }
  }

  &:focus {
    outline: 2px solid $primary-blue;
    outline-offset: 2px;
  }
}

.visible {
  font-size: $font-size-xs;
  color: $text-muted;
  font-weight: 400;
}

.outside {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  border-left: 1px solid $border-color;
  padding-left: $spacing-md;
  margin-left: $spacing-md;

  p {
    font-size: $font-size-xs;
    color: #915907;
    text-decoration: underline;
    margin: 0;
    font-weight: 600;
    cursor: pointer;
    transition: $transition;

    &:hover {
      color: #b8730a;
    }
  }
}

.outside-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: $spacing-sm;
  border-radius: $spacing-xs;
  transition: $transition;
}

.work {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  margin-top: $spacing-xs;

  span {
    font-size: $font-size-xs;
    color: $text-muted;
  }
}

@media screen and (max-width: 1024px) {
  .main-container {
    padding: $spacing-sm;
  }

  .nav {
    gap: 0;
  }

  .navber-contents {
    min-width: 70px;
    padding: $spacing-sm;
  }
}

@media screen and (max-width: 768px) {
  .search-bar {
    display: none;
  }

  .nav {
    display: none;
  }

  .outside {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: $spacing-sm;
    border-radius: $spacing-xs;
    transition: $transition;
    color: $text-secondary;

    &:hover {
      color: $primary-blue;
      background: $hover-color;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .main-container {
    justify-content: space-between;
    padding: $spacing-md;
  }

  .navbar-content {
    padding: 0;
  }

  .content {
    max-width: none;
    flex: none;
  }

  .dropdown-menu {
    width: calc(100vw - 32px);
    right: -16px;
  }
}

@media screen and (max-width: 480px) {
  .main-container {
    padding: $spacing-sm;
  }

  .navbar-content {
    padding: 0;
  }

  .profile {
    width: 28px;
    height: 28px;
  }

  .box img {
    width: 48px;
    height: 48px;
  }
}

@media (prefers-contrast: high) {
  .search-bar {
    border: 1px solid $text-secondary;
  }

  .dropdown-menu {
    border: 2px solid $text-primary;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
