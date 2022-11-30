<template>
  <div >
    <div >
      <div class="middle-container" >
      <div class="middle">
        <div class="section">
          <img
            src="../img/manin.jpg"
            alt="Visit profile for Md Manik"
            id="ember480"
            class="midle-img"
          />
          <input 
          @change="addItems"
          v-model="text"
            type="text"
            placeholder="Have a topic that excites you? Post about it"

          />
        </div>
        <div class="middle-body">
          <div class="middle-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="middle-photo"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
              </svg>
              <div class="span">Photo</div>
          </div>
          <div class="middle-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="middle-video"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
              </svg>
              <div class="span">Video</div>
          </div>
          <div class="middle-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="middle-event"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
              </svg>

              <div class="span">Event</div>
          </div>
          <div class="middle-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="middle-write"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
              </svg>

              <div class="span">Write articale</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Post Midddle site  -->
    <div class="post" v-for="item in userData" :key="item.id" >
      <div class="post-body">
        <div class="post-section">
          <div class="img-title">M</div>
          <br>
          <div class="align" >
            <span class="post-header">{{item.title}}</span> <br>
            <span class="email">{{item.email}}</span>  
          </div>
        </div>
        <span class="post-item">{{item.post}}</span>
        <hr>
        <div class="flex-container">
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
              </svg> Like
          </div>
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
              </svg> Comment
          </div>
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
              </svg> Share
          </div>
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
              </svg> Send
          </div>
        </div>
      </div>
    </div>
    <!-- second time  -->
    <div class="post">
      <div class="post-body">
        <div class="post-section">
          <div class="img-title">M</div>
          <br>
          <div class="align">
            <span class="post-header">Md Manik Sheak</span> <br>
            <span class="email">Email: Test@test1.com</span> <br>
            <span class="id"> I Am A FrontEnd Developer</span>
          </div>
        </div>
        <hr>
        <div class="flex-container">
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
              </svg> Like
          </div>
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
              </svg> Comment
          </div>
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
              </svg> Share
          </div>
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
              </svg> Send
          </div>
        </div>
      </div>
    </div>
    <!-- third time  -->
    <div class="post">
      <div class="post-body">
        <div class="post-section">
          <div class="pro-img-title">
            <img
              src="../img/manin.jpg"
              alt="Visit profile for Md Manik"
              id="ember480"
              class="pro-img"
            />
          </div>
          <br>
          <div class="align">
            <span class="post-header">Md Manik Sheak</span> <br>
            <span class="id"> FrontEnd Web Developer</span>
          </div>
        </div>
        <div class="height-img">
          <img
            class="pro-height-img"
            src="../img/manikbg.png"
            alt=""
          />
        </div>
        <hr>
        <div class="flex-container">
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
              </svg> Like
          </div>
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
              </svg> Comment
          </div>
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
              </svg> Share
          </div>
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
              </svg> Send
          </div>
        </div>
      </div>
    </div>
    <!-- last time  -->
    <div class="post">
      <div class="post-body">
        <div class="post-section">
          <div class="last-img-title">
            <img
              src="https://linkedin-mahmud49.netlify.app/_nuxt/img/connektf.e372b22.jpg"
              alt=""
              class="last-image"
            >
          </div>
          <br>
          <div class="align">
            <span class="post-header">CONNEKT STUDIO</span> <br>
            <span class="id"> SOFTWEAR DEVELOPMENT</span>
          </div>
        </div>
        <div class="last-height-img">
          <img
            src="https://linkedin-mahmud49.netlify.app/_nuxt/img/connekt.616f528.jpg"
            alt=""
            class="last-height-image"
          >
        </div>
        <hr>
        <div class="flex-container">
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
              </svg> Like
          </div>
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
              </svg> Comment
          </div>
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
              </svg> Share
          </div>
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
              </svg> Send
          </div>
        </div>
      </div>
    </div>
    </div>
 
  </div>
</template>

<script>
    export default {
        data() {
          return {
            text:'',
             email: '',
             userData:[
               {
                id: 1,
                title: 'Md Manik Sheak',
                 email: 'mdmanik081498@gmail.com',
                 post:" I Am a FrontEnd Developer"
               }
             ]
          }
        },
        methods: {
          addItems() {
            this.userData.push({post: this.text, email: this.email});
            this.text = ''
          }
        }
    }
</script>

<style>
.middle-container {
  margin-left: 5px;
  background: white !important;
}
.middle {
  border: 1px rgb(211, 209, 209) solid;
  border-radius: 5px;
}
.section {
  display: flex;
  align-items: center;
  padding: 8px 10px;
}
.section input {
  width: 80%;
  box-sizing: border-box;
  font-size: 1rem;
  text-decoration: none;
  margin-left: 1.5rem;
  padding: 1.5rem;
  height: 15px;
  border: 1px gray solid;
  color: black !important;
  font-weight: bold;
  border-radius: 5rem;
}
.midle-img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.middle-body {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.middle-section {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.middle-photo {
  color: rgb(52, 160, 211);
}
.middle-video {
  color: green;
}
.middle-event {
  color: coral;
}
.middle-write {
  color: chocolate;
}
.span {
  text-decoration: none !important;
  padding: 3px 15px;
  color: gray;
  font-weight: bold;
}
/* Post Middle  */
.post {
  margin-top: 10px;
  border-radius: 10px;
  border: 1px rgb(211, 209, 209) solid;
}
.post-body {
  padding: 8px 10px;
}
.img-title {
  padding-top: 15px;
  text-align: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: coral;
  font-weight: bold;
}
.post-section {
  display: flex;
}

.post-space:hover {
   background-color: rgb(211, 205, 205);
}
.align {
  padding: 6px 0 0 10px;
  line-height: 1.2;
}
.post-header {
  font-size: .9rem;
  font-weight: bold;
  color: black;
}
.email {
  font-size: 12px;
  color: gray;
  font-weight: bold;
}
.post-item {
  margin-left: 3.5rem;
  font-weight: bold;
  color: black;
}
.flex-container {
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  color: rgb(90, 88, 88);
}
.post-space {
  display: flex;
  align-items: center;
  padding: 7px 0 0 7px;
}
.wish-match {
  padding: 0 6px;
}
.id {
  font-size: 0.8rem;
  font-weight: bold;
  color: black;
  line-height: 1.2;
}
/* third title  */
.pro-img {
  /* padding-top: 15px; */
  text-align: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: coral;
  font-weight: bold;
}
.pro-height-img {
  width: 100%;
  height: 250px;
}
/* last side  */
  /* .last-img-title {

  } */
  .last-image {
    height: 50px;
    width: 70px;
    font-weight: bold;
  }
  .last-height-image {
    height: 600px;
    width: 100%;
  }
</style>