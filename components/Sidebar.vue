<template>
  <div class="container">
    <div class="side-container">
      <div class="center">
        <img src="../img/IMG_20221031_215233.jpg" class="main-img" />
      </div>
      <img class="sidebar-img" src="../img/profile-img.JPG" alt="profile-img" />
      <div class="sidebar-body">
        <div class="title">Md Manik</div>
        <span class="title-body">Frontend Developer</span>
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

<script>
export default {};
</script>

<style>
.container {
  width: 100%;
  box-sizing: border-box;
}

.side-container {
  cursor: pointer;
  width: 21%;
  height: 100%;
  background: white !important;
  border-radius: 5px;
  margin-top: -15px;
  margin-left: 1.5rem;
}

.sidebar-img {
  width: 100%;
  height: 100%;
}

.main-img {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
}

.center {
  align-items: center;
  justify-content: center;
}

.side-container {
  position: relative;
  align-items: center;
  border-radius: 5px;
  border: 1px rgb(211, 209, 209) solid;
  background: hsl(0, 16%, 96%);
}

.sidebar-container .sidebar-img {
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  outline: none;
}

.center .main-img {
  position: absolute;
  padding: 0 5px;
  top: 1.9rem;
  left: 4.8rem;
}

.sidebar-body {
  margin-top: 1rem;
  line-height: 1;
  text-align: center;
  justify-content: center;
}

.title {
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.title:hover {
  text-decoration: underline;
}

.title-body {
  font-size: 13px;
  color: rgb(99, 98, 98);
}

h3 {
  font-size: 1.2rem;
}

.connection-body {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 5px;
}

.connection-body:hover {
  background-color: rgb(221, 218, 218);
}

.view {
  color: blue;
}

.first {
  color: rgb(80, 78, 78);
  font-size: 0.9rem;
}

.second {
  color: rgb(80, 78, 78);
  padding: 5px;
  font-size: 0.9rem;
}

.first-bold {
  font-size: 0.9rem;
  color: rgb(58, 56, 56);
  font-weight: bold;
  margin-bottom: 5px;
  padding: 5px;
}

p {
  font-weight: bold;
}

.profile-view {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  padding-right: 12px;
}

.profile-view:hover {
  background-color: rgb(221, 218, 218);
  height: 100%;
}

.views {
  color: blue;
}

.premium:hover {
  background-color: rgb(221, 218, 218);
  height: 100%;
}

.flex {
  display: flex;
  margin-top: 10px;
  padding: 0px 7px;
}

.premiun-middle {
  font-size: 0.9rem;
  color: black;
  font-weight: bold;
  text-decoration: underline;
  padding-left: 10px;
}

.items {
  display: flex;
  text-align: center;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 10px;
  font-weight: bold;
}

.items:hover {
  background-color: rgb(221, 218, 218);
  height: 100%;
}

.last {
  font-size: 0.8rem;
  color: black;
  margin-left: 10px;
  padding: 5px 7px;
}

.bottom {
  width: 21%;
  height: 100%;
  background: white !important;
  border: 1px rgb(211, 209, 209) solid;
  border-radius: 5px;
  padding-top: 5px;
  line-height: 1;
  margin-left: 1.5rem;
}

.bottom-body {
  padding-left: 10px;
  color: blue;
}

.bottom-list {
  padding: 1rem 5px;
  font-size: 13px;
  color: blue;
  cursor: pointer;
}

.bottom-list:hover {
  text-decoration: underline;
}

.events {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  font-weight: bold;
}

.plus:hover {
  cursor: pointer;
  border-radius: 100%;
  background-color: rgb(221, 218, 218);
  height: 100%;
}

.bottom-h {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(134, 128, 128);
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-bottom: 8px;
}

.bottom-h:hover {
  background-color: rgb(221, 218, 218);
  border-radius: 5px;
}
</style>
