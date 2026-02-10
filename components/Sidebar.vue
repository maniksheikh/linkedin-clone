<template>
  <div class="container">
    <div class="side-container">
      <div class="profile-card">
        <div class="banner">
          <img src="/img/banner-img.jpg" alt="banner" @error="handleImageError">
        </div>
        <div class="avatar">
          <img :src="getUserProfileImage(user)" alt="profile" @error="handleImageError" />
        </div>
        <div class="info">
          <h2>{{ user ? user.displayName || 'Guest User' : 'Guest User' }}</h2>
          <p class="role">{{ user ? user.email : 'Please sign in' }}</p>
          <p class="location">Bogra District, Rajshahi</p>
          <div class="company">
            <img src="/img/studio.jpg" alt="Connekt Studio Logo" @error="handleImageError" />
            <span>CONNEKT STUDIO</span>
          </div>
        </div>
      </div>
      <div class="container-body">
        <div class="stats-box">
          <div class="connection">
            <div class="connection-body">
              <span class="first">Connections</span>
              <span class="view">39</span>
            </div>
            <span class="first-bold">Grow your Network</span>
            <div class="profile-view">
              <span class="second">Who's viewed your profile</span>
              <span class="views">4</span>
            </div>
          </div>
        </div>
      </div>
      <div class="premium">
        <span class="second">Access exclusive tools & insights</span>
        <div class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" class="mercado-match"
            width="24" height="24" focusable="false">
            <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e">
            </path>
            <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z" fill="#e7a33e">
            </path>
          </svg>
          <span class="premiun-middle">Try Premium for Free</span>
        </div>
      </div>
      <div class="items">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor"
          width="16" height="16" focusable="false">
          <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
        </svg>
        <span class="last">My Items</span>
      </div>
      <div class="bottom">
        <div class="bottom-body">
          <span class="bottom-list">Groups</span>
          <div class="events">
            <span class="bottom-list">Events</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor"
              class="plus" width="20" height="20" focusable="false">
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
          </div>
          <span class="bottom-list">Followed Hashtags</span>
        </div>
        <hr />
        <span class="bottom-h">Discover more</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['user'])
  },
  methods: {
    getUserProfileImage(user) {
      console.log('getUserProfileImage called with user:', user);
      if (user && user.photoURL && user.photoURL !== null && user.photoURL !== '') {
        console.log('Using user photoURL:', user.photoURL);
        return user.photoURL;
      }
      if (user && user.email) {
        const initials = this.getInitials(user.displayName || user.email);
        const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=0a66c2&color=fff&size=200&bold=true`;
        console.log('Using generated avatar URL:', avatarUrl);
        return avatarUrl;
      }
      return '/static/img/profile-img.jpg';
    },

    getInitials(name) {
      if (!name) return 'U';
      if (name.includes('@')) {
        name = name.split('@')[0];
      }

      const words = name.split(' ').filter(word => word.length > 0);
      if (words.length >= 2) {
        return (words[0][0] + words[1][0]).toUpperCase();
      } else if (words.length === 1) {
        return words[0].substring(0, 2).toUpperCase();
      }
      return 'U';
    },

    handleImageError(event) {
      console.log('Image error for:', event.target.src);

      if (event.target.src.includes('placeholder.svg') || event.target.src.includes('default-avatar.svg')) {
        return;
      }
      if (!event.target.src.includes('default-avatar.svg')) {
        event.target.src = '/static/img/default-avatar.svg';
        return;
      }
      if (!event.target.src.includes('profile-img.jpg')) {
        event.target.src = '/static/img/profile-img.jpg';
        return;
      }
      event.target.src = '/static/img/placeholder.svg';
    }
  }
};
</script>

<style lang="scss">
$primary-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
$text-gray: rgb(80, 78, 78);
$text-dark-gray: rgb(58, 56, 56);
$border-color: rgb(211, 209, 209);
$background-light: hsl(0, 16%, 96%);
$blue-color: blue;
$border-radius: 5px;
$sidebar-width: 24%;
$white: white;
$black: black;

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

// Main container
.container {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;

  // Side container
  .side-container {
    cursor: pointer;
    width: $sidebar-width;
    height: 100%;
    border-radius: $border-radius;
    margin-top: 5.5rem;
    position: relative;
    align-items: center;
    overflow: hidden;

    .sidebar-img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: none;
      outline: none;
    }

    .container-body {
      margin-top: 8px;
      padding-top: 7px;

      .stats-box {
        background: $white;
        border: 1px solid $border-color;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        margin-bottom: 8px;

        .connection {
          padding: 8px 12px;
          cursor: pointer;
          &:hover {
            .first,
            .view,
            .first-bold {
              color: #0a66c2;
              text-decoration: underline;
            }
          }

          .connection-body {
            @include flex-between;
            margin-bottom: 4px;
            .first {
              color: #0a66c2;
              font-size: 0.9rem;
              transition: all 0.2s ease;
            }
            .view {
              color: #0a66c2;
              font-weight: 600;
              transition: all 0.2s ease;
            }
          }
          .first-bold {
            display: block;
            font-weight: 600;
            transition: all 0.2s ease;
          }
        }

        .profile-view {
          @include flex-between;
          padding: 5px;
          cursor: pointer;
          &:hover {
            .second,
            .views {
              color: #0a66c2;
              text-decoration: underline;
            }
          }

          .second {
            color: $text-gray;
            font-size: 0.9rem;
            transition: all 0.2s ease;
          }
          .views {
            color: #0a66c2;
            font-weight: 600;
            transition: all 0.2s ease;
          }
        }
      }

      .premium {
        padding: 12px;
        border-radius: $border-radius;
        background: $white;
        margin-bottom: 8px;
        border: 1px solid $border-color;
        cursor: pointer;
        &:hover {
          .premiun-middle {
            color: #0a66c2;
            text-decoration: underline;
          }
        }

        .flex {
          display: flex;
          margin-top: 10px;
          padding: 0px 7px;
        }

        .premiun-middle {
          font-size: 0.9rem;
          color: $black;
          font-weight: bold;
          padding-left: 10px;
          transition: all 0.2s ease;
        }
      }

      .items {
        display: flex;
        align-items: center;
        background: $white;
        padding: 8px 12px;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        margin-bottom: 8px;
        cursor: pointer;
        &:hover {
          .last {
            color: #0a66c2;
            text-decoration: underline;
          }
          svg {
            color: #0a66c2;
          }
        }
        .last {
          font-size: 0.9rem;
          color: $text-gray;
          margin-left: 10px;
          transition: all 0.2s ease;
        }
      }

      .bottom {
        background: $white;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: 8px 12px;
        margin-bottom: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        width: calc(100% - 2px);

        .bottom-body {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;

          .bottom-list {
            color: $text-gray;
            font-size: 0.9rem;
            padding: 5px 7px;
            cursor: pointer;
            display: block;
            width: 100%;
            text-align: left;
            transition: all 0.2s ease;
            &:hover {
              color: #0a66c2;
              text-decoration: underline;
            }
          }

          .events {
            @include flex-between;
            padding: 5px 7px;
            width: 100%;
            .plus {
              cursor: pointer;
              color: $text-gray;
              transition: all 0.2s ease;
              &:hover {
                color: #0a66c2;
              }
            }
          }
        }

        hr {
          margin: 8px 0;
          border: none;
          border-top: 1px solid $border-color;
          width: 100%;
        }

        .bottom-h {
          display: block;
          color: $text-gray;
          font-size: 0.9rem;
          padding: 5px 7px;
          cursor: pointer;
          text-align: center;
          width: 100%;
          transition: all 0.2s ease;
          &:hover {
            color: #0a66c2;
            text-decoration: underline;
          }
        }
      }
    }

    .profile-card {
      width: 100%;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      overflow: hidden;
      font-family: 'Segoe UI', sans-serif;
      position: relative;
      text-align: center;
      border: 1px solid $border-color;

      .banner {
        width: 100%;
        height: 100px;
        overflow: hidden;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .avatar {
        position: absolute;
        top: 70px;
        left: 20%;
        transform: translateX(-50%);
        width: 65px;
        height: 65px;
        border-radius: 50%;
        border: 4px solid #fff;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .info {
        margin-top: 45px;
        padding: 0 15px 15px;

        h2 {
          font-size: 16px;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .role {
          font-size: 13px;
          color: #333;
          margin-bottom: 4px;
        }
        .location {
          font-size: 12px;
          color: #777;
          margin-bottom: 10px;
        }
        .company {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          img {
            width: 16px;
            height: 16px;
            border-radius: 4px;
          }
          span {
            font-size: 12px;
            font-weight: 600;
            color: #000;
          }
        }
      }
    }

    // Connection section
    .connection {
      .connection-body {
        @include flex-between;
        text-align: center;
        padding: 5px;
        margin-bottom: 5px;
      }
      .view {
        color: $blue-color;
      }
      .first-bold {
        font-size: 0.9rem;
        color: $text-dark-gray;
        font-weight: bold;
        margin-bottom: 5px;
        padding: 5px;
      }
    }

    // Profile view section
    .profile-view {
      @include flex-between;
      text-align: center;
      padding-right: 12px;
    }

    // Premium section
    .premium {
      padding: 12px;
      border-radius: $border-radius;
      background: $white;
      margin-bottom: 8px;
      border: 1px solid $border-color;
      cursor: pointer;
      .flex {
        display: flex;
        margin-top: 10px;
        padding: 0px 7px;
      }
      .premiun-middle {
        font-size: 0.9rem;
        color: $black;
        font-weight: bold;
        padding-left: 10px;
      }
    }

    // Items section
    .items {
      display: flex;
      align-items: center;
      background: $white;
      padding: 8px 12px;
      border-radius: $border-radius;
      border: 1px solid $border-color;
      margin-bottom: 8px;
      cursor: pointer;
      svg {
        color: $text-gray;
      }

      .last {
        font-size: 0.9rem;
        color: $text-gray;
        margin-left: 10px;
      }
      &:hover {
        .last {
          color: #0a66c2;
          text-decoration: underline;
        }
        svg {
          color: #0a66c2;
        }
      }
    }

    // Bottom section
    .bottom {
      background: $white;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 8px 12px;
      margin-bottom: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
      width: calc(100% - 2px);

      .bottom-body {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;

        .bottom-list {
          color: $text-gray;
          font-size: 0.9rem;
          padding: 5px 7px;
          cursor: pointer;
          display: block;
          width: 100%;
          text-align: left;
          transition: all 0.2s ease;
          &:hover {
            color: #0a66c2;
            text-decoration: underline;
          }
        }

        .events {
          @include flex-between;
          padding: 5px 7px;
          width: 100%;

          .plus {
            cursor: pointer;
            color: $text-gray;
            transition: all 0.2s ease;
            &:hover {
              color: #0a66c2;
            }
          }
        }
      }

      hr {
        margin: 8px 0;
        border: none;
        border-top: 1px solid $border-color;
        width: 100%;
      }

      .bottom-h {
        display: block;
        color: $text-gray;
        font-size: 0.9rem;
        padding: 5px 7px;
        cursor: pointer;
        text-align: center;
        width: 100%;
        transition: all 0.2s ease;
          &:hover {
          color: #0a66c2;
          text-decoration: underline;
         }
      }
    }
  }

  .first {
    color: $text-gray;
    font-size: 0.9rem;
  }

  .second {
    color: $text-gray;
    padding: 5px;
    font-size: 0.9rem;
  }

  h3 {
    font-size: 1.2rem;
  }
  p {
    font-weight: bold;
  }
}

@media screen and (max-width: 1024px) {
  .container {
    .side-container {
      width: 100%;
      margin-top: 4rem;

      .profile-card {
        .banner {
          height: 80px;
        }

        .avatar {
          top: 45px;
          width: 50px;
          height: 50px;
        }

        .info {
          margin-top: 35px;
          padding: 0 12px 12px;
          h2 {
            font-size: 14px;
          }
          .role {
            font-size: 11px;
          }
          .location {
            font-size: 10px;
          }
          .company {
            img {
              width: 14px;
              height: 14px;
            }
            span {
              font-size: 10px;
            }
          }
        }
      }

      .container-body {
        .stats-box .connection {
          padding: 6px 10px;
          .connection-body {
            .first {
              font-size: 0.8rem;
            }
          }
          .first-bold {
            font-size: 0.8rem;
          }
        }

        .stats-box .profile-view {
          padding: 4px;
          .second {
            font-size: 0.8rem;
          }
        }

        .premium {
          padding: 10px;
          .premiun-middle {
            font-size: 0.8rem;
          }
        }

        .items {
          padding: 6px 10px;
          .last {
            font-size: 0.8rem;
          }
        }

        .bottom {
          padding: 6px 10px;
          .bottom-body .bottom-list {
            font-size: 0.8rem;
            padding: 4px 6px;
          }
          .bottom-h {
            font-size: 0.8rem;
            padding: 4px 6px;
          }
        }
      }
    }
  }
}
</style>
