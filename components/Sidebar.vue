<template>
  <div class="container">
    <div class="side-container">
      <img
        class="sidebar-img"
        src="../img/manikbg.png"
        alt=""
      />
      <div class="center">
        <img
          src="../img/manin.jpg"
          alt=""
          class="main-img"
        />
      </div>
      <div class="body">
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
          <p>Who`s viewed your profile</p>
          <span class="views">4</span>
        </div>
      </div>
      <hr /> 
      <div class="premium">
        <p>Access exclusive tools & insights</p>
        <div class="flex">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          class="mercado-match"
          width="24"
          height="24"
          focusable="false"
        >
          <path
            d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
            fill="#f8c77e"
          ></path>
          <path
            d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
            fill="#e7a33e"
          ></path>
        </svg>
        <span class="premiun-middle">Try Premium for Free</span>
        </div>  
      </div>
      <hr />
      <div class="items">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="currentColor"
          width="16"
          height="16"
          focusable="false"
        >
          <path
            d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"
          ></path>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              class="plus"
              width="20"
              height="20"
              focusable="false"
            >
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
          </div>
          <span class="bottom-list">Followed Hashtags</span>
        </div>
        <hr />
        <div class="finished">
          <h3>Discover more</h3>
        </div>
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
  width: 20%;
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
.body {
  margin-top: 3rem;
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
.connection {
  padding: 0 10px;
}
.connection:hover {
  background-color: rgb(221, 218, 218);
  height: 100%;
}
.connection-body {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
}
.view {
  color: blue;
}
.first {
  color: rgb(80, 78, 78);
}
.first-bold {
  font-size: 0.8rem;
  color: rgb(58, 56, 56);
  font-weight: bold;
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
  background-color:  rgb(221, 218, 218);
  height: 100%;
}
.views {
  color: blue;
}

.premium:hover {
  background-color:  rgb(221, 218, 218);
  height: 100%;
}
.flex {
  display: flex;
}
.premiun-middle{
  font-size: 0.9rem;
  color: black;
  font-weight: bold;
  text-decoration: underline;
  padding-left: 5px;
}
.items {
  display: flex;
  text-align: center;
  align-items: center;
  padding-left: 14px;
  margin-bottom: 10px;
  font-weight: bold;
}
.items:hover {
  background-color:  rgb(221, 218, 218);
  height: 100%;
}
.last {
  font-size: 0.8rem;
  color: black;
  padding-left: 5px;
}

.bottom {
  width: 20%;
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
  padding:1rem  5px;
  font-size: 13px;
  color: blue;
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
  background-color:  rgb(221, 218, 218);
  height: 100%;
}
  h3 {
    text-align: center;
    justify-content: center;
    color: rgb(134, 128, 128);
  }
  h3:hover {
    background-color:  rgb(221, 218, 218);
     height: 100%;
  }
</style>
