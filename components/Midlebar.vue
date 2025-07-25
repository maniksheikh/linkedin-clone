<template>
  <div>
    <div class="middle-container">
      <div class="middle">
        <div class="section">
          <img src="/img/profile-img.jpg" alt="Visit profile for Md Manik" id="ember480" class="midle-img" @error="handleImageError" />
          <input @change="addItems" v-model="text" type="text"
            placeholder="Have a topic that excites you? Post about it" />
        </div>
        <div class="middle-body">
          <div class="middle-section">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="middle-photo" width="24" height="24" focusable="false">
              <path
                d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z">
              </path>
            </svg>
            <div class="span">Photo</div>
          </div>
          <div class="middle-section">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="middle-video" width="24" height="24" focusable="false">
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
            </svg>
            <div class="span">Video</div>
          </div>
          <div class="middle-section">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="middle-event" width="24" height="24" focusable="false">
              <path
                d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z">
              </path>
            </svg>
            <div class="span">Event</div>
          </div>
          <div class="middle-section">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="middle-write" width="24" height="24" focusable="false">
              <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
            </svg>
            <div class="span">Write articale</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Post Midddle site  -->
    <div class="post" v-for="item in userData" :key="item.id">
      <div class="post-body">
        <div class="post-section">
          <div class="img-title">M</div>
          <br>
          <div class="items-flex">
            <div class="align">
              <div class="header">
                <span class="post-header">{{ item.name }}</span> <br>
                <span class="email">{{ item.email }}</span>
              </div>
            </div>
          </div>
        </div>
        <span class="post-item">{{ item.post }}</span>
        <div class="flex-container">
          <div class="post-react">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="wish-match" width="24" height="24" focusable="false">
              <path
                d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z">
              </path>
            </svg>
            <div class="span">Like</div>
          </div>
          <div class="post-react">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="wish-match" width="24" height="24" focusable="false">
              <path
                d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z">
              </path>
            </svg>
            <div class="span">Comment</div>
          </div>
          <div class="post-react">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="wish-match" width="24" height="24" focusable="false">
              <path
                d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z">
              </path>
            </svg>
            <div class="span">Share</div>
          </div>
          <div class="post-react">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="wish-match" width="24" height="24" focusable="false">
              <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
            </svg>
            <div class="span">Send</div>
          </div>
        </div>
      </div>
    </div>
    <!-- third time  -->
    <div class="post-container">
      <div v-for="post in importData" :key="post" class="post-body">
        <div class="post-section">
          <div class="pro-img-title">
            <img :src="post.avatar" class="pro-img" @error="handleImageError" />
          </div>
          <br />
          <div class="align">
            <div class="header">
              <span class="post-header">{{ post.name }}</span> <br />
              <span class="id">{{ post.title }}</span>
            </div>
            <span class="post-dec">{{ post.description }}</span>
          </div>
        </div>
        <div class="height-img">
          <img class="pro-height-img" :src="post.img" @error="handleImageError" />
        </div>
        <div class="flex-container">
          <div class="post-react">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="wish-match" width="24" height="24" focusable="false">
              <path
                d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z">
              </path>
            </svg>
            <div class="span">Like</div>
          </div>
          <div class="post-react">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="wish-match" width="24" height="24" focusable="false">
              <path
                d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z">
              </path>
            </svg>
            <div class="span">Comment</div>
          </div>
          <div class="post-react">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="wish-match" width="24" height="24" focusable="false">
              <path
                d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z">
              </path>
            </svg>
            <div class="span">Share</div>
          </div>
          <div class="post-react">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="wish-match" width="24" height="24" focusable="false">
              <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
            </svg>
            <div class="span">Send</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postData from '~/store/post-data.json'

export default {
  data() {
    return {
      importData: postData,
      text: '',
      email: '',
      userData: [
        {
          id: 1,
          name: 'Md Manik Sheak',
          email: 'mdmanik081498@gmail.com',
          post: " I Am a FrontEnd Developer"
        }
      ]
    }
  },
  methods: {
    addItems() {
      this.userData.push({ post: this.text, email: this.email });
      this.text = ''
    },
    handleImageError(event) {
      event.target.src = '/img/default-avatar.svg'; // Fallback image
    }
  }
}
</script>

<style lang="scss">

$font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
$font-size-xs: 0.75rem;
$font-size-sm: 0.875rem;
$font-size-base: 1rem;
$font-size-lg: 1.125rem;
$font-size-xl: 1.25rem;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;

$color-primary: #0a66c2;
$color-gray-100: #f3f2ef;
$color-gray-300: #ddd;
$color-gray-500: #666;
$color-gray-700: #333;
$color-gray-900: #000;
$color-green: #057642;
$color-orange: #e7a33e;
$color-red: #cc1016;

* {
  font-family: $font-family-primary;
}

.middle-container {
  background: white !important;
}

.middle {
  border: 1px solid $color-gray-300;
  border-radius: 8px;
  background: white;
}

.section {
  display: flex;
  align-items: center;
  padding: 16px 12px;

  input {
    flex: 1;
    margin-left: 12px;
    padding: 12px 16px;
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-gray-700;
    border: 1px solid $color-gray-300;
    border-radius: 35px;
    outline: none;
    background: white;
    transition: all 0.2s ease;

    &::placeholder {
      color: $color-gray-500;
      font-weight: $font-weight-normal;
    }

    &:hover {
      cursor: pointer;
      background: $color-gray-100;
      border-color: $color-gray-500;
      color: $color-gray-900;

      &::placeholder {
        color: $color-gray-700;
      }
    }

    &:focus {
      border-color: $color-primary;
      box-shadow: 0 0 0 2px rgba(10, 102, 194, 0.1);

      &::placeholder {
        color: $color-gray-500;
      }
    }
  }
}

.midle-img {
  cursor: pointer;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  object-fit: cover;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
}

.middle-body {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 0 8px 8px;
}

.middle-section {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin: 0 4px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    background: $color-gray-100;
    
    .span {
      color: $color-gray-900;
    }
    
    svg {
      opacity: 0.8;
    }
  }

  .span {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-gray-700;
    margin-left: 8px;
    transition: color 0.2s ease;
  }
}

.middle-photo {
  color: $color-primary;
}

.middle-video {
  color: $color-green;
}

.middle-event {
  color: $color-orange;
}

.middle-write {
  color: $color-red;
}

.post {
  margin-top: 12px;
  border-radius: 8px;
}

.post-container {
  margin-top: 12px;
}

.post-body {
  margin-top: 12px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid $color-gray-300;
  background: white;
}

.img-title {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: $color-orange;
  color: white;
  font-size: $font-size-lg;
  font-weight: $font-weight-bold;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
}

.post-section {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
}

.items-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-icon {
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  top: 5px;
  right: 10px;
}

.align {
  flex: 1;
  margin-left: 12px;

  .header {
    cursor: pointer;
    line-height: 1.4;
    margin-bottom: 8px;
    transition: all 0.2s ease;

    &:hover {
      .post-header {
        color: $color-primary;
        text-decoration: underline;
      }
    }
  }
}

.post-header {
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  color: $color-gray-900;
  line-height: 1.3;
  transition: all 0.2s ease;
}

.email {
  font-size: $font-size-xs;
  color: $color-gray-500;
  font-weight: $font-weight-normal;
  line-height: 1.3;
}

.id {
  font-size: $font-size-xs;
  font-weight: $font-weight-medium;
  color: $color-gray-700;
  line-height: 1.3;
}

.post-item {
  display: block;
  margin-left: 60px;
  margin-bottom: 16px;
  font-size: $font-size-sm;
  font-weight: $font-weight-normal;
  color: $color-gray-900;
  line-height: 1.5;
}

.post-dec {
  display: block;
  margin-top: 8px;
  font-size: $font-size-sm;
  font-weight: $font-weight-normal;
  color: $color-gray-900;
  line-height: 1.5;
}

.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid $color-gray-300;
}

.post-react {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    background: $color-gray-100;
    
    .span {
      color: $color-gray-900;
      font-weight: $font-weight-semibold;
    }
    
    svg {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  .span {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-gray-700;
    margin-left: 8px;
    transition: all 0.2s ease;
  }
}

.wish-match {
  color: $color-gray-500;
  transition: all 0.2s ease;

  .post-react:hover & {
    color: $color-gray-900;
  }
}

.pro-img {
  cursor: pointer;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  object-fit: cover;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
}

.pro-img-title {
  flex-shrink: 0;
}

.pro-height-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin: 12px 0;
}

.height-img {
  margin: 12px 0;
}

.last-image {
  cursor: pointer;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.last-height-image {
  height: 400px;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
}

// Responsive Styles
@media (max-width: 768px) {
  .section {
    flex-direction: column;
    padding: 12px;

    input {
      width: 100%;
      margin: 8px 0 0 0;
    }
  }

  .middle-body {
    flex-direction: column;
    gap: 8px;
  }

  .middle-section {
    justify-content: flex-start;
    margin: 0;
  }

  .items-flex {
    flex-direction: column;
    align-items: flex-start;
  }

  .post-container,
  .post-body {
    padding: 12px;
  }

  .post-react {
    padding: 6px 8px;
  }

  .pro-height-img {
    height: 300px;
  }

  .post-dec {
    font-size: $font-size-sm;
  }
}

@media (max-width: 480px) {
  .pro-img,
  .midle-img,
  .img-title,
  .last-image {
    height: 40px;
    width: 40px;
  }

  .img-title {
    font-size: $font-size-base;
  }

  .post-dec {
    font-size: $font-size-sm;
  }

  .post-header {
    font-size: $font-size-sm;
  }

  .email {
    font-size: $font-size-xs;
  }

  .section input {
    font-size: $font-size-sm;
  }

  .middle-body {
    flex-direction: column;
    gap: 4px;
  }

  .middle-section {
    flex-direction: row;
    align-items: center;
    padding: 6px 8px;
  }

  .post-item {
    margin-left: 52px;
  }

  .pro-height-img {
    height: 250px;
  }
}
</style>