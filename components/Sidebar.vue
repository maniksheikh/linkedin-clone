<template>
  <div class="container">
    <div class="side-container">
      <div class="profile-card">
        <div class="banner">
          <img src="" alt="banner">
        </div>
        <div class="avatar">
          <img src="/Manik.jpg" alt="profile" />
        </div>
        <div class="info">
          <h2>Muhammad Manik Sheikh</h2>
          <p class="role">Jr. Frontend Engineer | Javascript, Tailwindcss, Vuejs, Nuxt3</p>
          <p class="location">Bogra District, Rajshahi</p>
          <div class="company">
            <img src="/connekt.jpg" alt="Connekt Studio Logo" />
            <span>CONNEKT STUDIO</span>
          </div>
        </div>
      </div>
      <hr />
      <div class="container-body">
        <div class="connection">
          <div class="connection-body">
            <span class="first">Connections</span>
            <span class="view">39</span>
          </div>
          <span class="first-bold">Grow your Network</span>
        </div>
        <div class="profile-view">
          <span class="second">Who`s viewed your profile</span>
          <span class="views">4</span>
        </div>
      </div>
      <hr />
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
      <hr />
      <div class="items">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor"
          width="16" height="16" focusable="false">
          <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
        </svg>
        <span class="last">My Items</span>
      </div>
    </div>
    <br>
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
</template>

<style lang="scss">

$primary-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
$hover-bg: rgb(221, 218, 218);
$text-gray: rgb(80, 78, 78);
$text-dark-gray: rgb(58, 56, 56);
$border-color: rgb(211, 209, 209);
$background-light: hsl(0, 16%, 96%);
$blue-color: blue;
$border-radius: 5px;
$sidebar-width: 24%;
$white: white;
$black: black;

@mixin hover-effect {
  &:hover {
    background-color: $hover-bg;
  }
}

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

  // Side container
  .side-container {
    cursor: pointer;
    width: $sidebar-width;
    height: 100%;
    background: $white !important;
    border-radius: $border-radius;
    margin-top: 5.5rem;
    position: relative;
    align-items: center;
    border: 1px $border-color solid;
    background: $background-light;

    .sidebar-img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: none;
      outline: none;
    }
  }

  .profile-card {
    width: 280px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    font-family: 'Segoe UI', sans-serif;
    position: relative;
    text-align: center;

    .banner {
      width: 100%;
      height: 100px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .avatar {
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 4px solid #fff;
      overflow: hidden;
      background: #fff;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .info {
      margin-top: 50px;
      padding: 0 15px 20px;

      h2 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 6px;
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
      @include hover-effect;
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

    &:hover {
      background-color: $hover-bg;
      height: 100%;
    }

    .views {
      color: $blue-color;
    }
  }

  // Premium section
  .premium {
    @include hover-effect;

    &:hover {
      height: 100%;
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
      text-decoration: underline;
      padding-left: 10px;
    }
  }

  // Items section
  .items {
    display: flex;
    text-align: center;
    align-items: center;
    padding: 5px 10px;
    margin-bottom: 10px;
    font-weight: bold;

    &:hover {
      background-color: $hover-bg;
      height: 100%;
    }

    .last {
      font-size: 0.8rem;
      color: $black;
      margin-left: 10px;
      padding: 5px 7px;
    }
  }

  // Bottom section
  .bottom {
    width: $sidebar-width;
    height: 100%;
    background: $white !important;
    border: 1px $border-color solid;
    border-radius: $border-radius;
    padding-top: 5px;
    line-height: 1;

    .bottom-body {
      padding-left: 10px;
      color: $blue-color;
    }

    .bottom-list {
      padding: 1rem 5px;
      font-size: 13px;
      color: $blue-color;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    .events {
      @include flex-between;
      padding-right: 10px;
      font-weight: bold;

      .plus {
        &:hover {
          cursor: pointer;
          border-radius: 100%;
          background-color: $hover-bg;
          height: 100%;
        }
      }
    }

    .bottom-h {
      @include flex-center;
      color: rgb(134, 128, 128);
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
      margin-bottom: 8px;

      &:hover {
        background-color: $hover-bg;
        border-radius: $border-radius;
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
</style>
