<template>
  <div>
    <div class="middle-container">
      <div class="middle">
        <div class="section">
          <img :src="currentUser?.photoURL || '/img/default-avatar.svg'"
            :alt="'Visit profile for ' + (currentUser?.displayName || 'User')" class="midle-img"
            @error="handleImageError" />
          <input @change="addItems" v-model="text" type="text" placeholder="Start a Post" />
        </div>
        <div class="middle-body">
          <div class="middle-section">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="middle-video" width="24" height="24" focusable="false">
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
            </svg>
            <div class="span">Video</div>
          </div>
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
              class="middle-write" width="24" height="24" focusable="false">
              <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
            </svg>
            <div class="span">Write article</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Two time  -->
    <div class="post-container">
      <div v-for="post in importData" :key="post.id || post" class="post-body">
        <div class="post-section">
          <div class="pro-img-title">
            <img :src="currentUser?.photoURL || '/img/default-avatar.svg'"
              :alt="'Visit profile for ' + (currentUser?.displayName || 'User')" class="midle-img"
              @error="handleImageError" />
          </div>
          <div class="align">
            <div class="header">
              <span class="post-header">{{ post.name }}</span> <br />
              <span class="id">{{ post.title }}</span>
            </div>
            <span class="post-dec">{{ post.description }}</span>
          </div>
          <button class="delete-icon" @click="deleteImportedPost(post)" title="Delete post">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
        <div class="height-img" v-if="post.img">
          <img class="pro-height-img" :src="post.img" @error="handleImageError" />
        </div>
        <div class="flex-container">
          <div class="post-react">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="wish-match" width="20" height="20" focusable="false">
              <path
                d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z">
              </path>
            </svg>
            <div class="span">Like</div>
          </div>
          <div class="post-react">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="wish-match" width="20" height="20" focusable="false">
              <path
                d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z">
              </path>
            </svg>
            <div class="span">Comment</div>
          </div>
          <div class="post-react">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="wish-match" width="20" height="20" focusable="false">
              <path d="M13.96 5H6c-.55 0-1 .45-1 1v10H3V6c0-1.66 1.34-3 3-3h7.96L12 0h2.37L17 4l-2.63 4H12l1.96-3zm5.54 3H19v10c0 .55-.45 1-1 1h-7.96L12 16H9.63L7 20l2.63 4H12l-1.96-3H18c1.66 0 3-1.34 3-3V8h-1.5z"></path>
            </svg>
            <div class="span">Repost</div>
          </div>
          <div class="post-react">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="wish-match" width="20" height="20" focusable="false">
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
import { useAuth } from '~/composables/useAuth'
import { auth } from '~/plugins/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const currentUser = ref(null)

    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        currentUser.value = user
      })
    })

    return { currentUser }
  },
  data() {
    return {
      importData: postData,
      text: '',
      email: ''
    }
  },
  methods: {
    addItems() {
      if (this.text.trim()) {
        const newPost = {
          id: Date.now(),
          name: this.currentUser ? this.currentUser.displayName : 'Anonymous',
          title: this.currentUser ? this.currentUser.email : 'anonymous@user.com',
          description: this.text,
          avatar: this.currentUser ? this.currentUser.photoURL : '/img/default-avatar.svg',
          img: null
        };
        this.importData.unshift(newPost);
        this.text = '';
      }
    },
    deleteImportedPost(post) {
      this.importData = this.importData.filter(p => p !== post);
    },
    handleImageError(event) {
      const currentSrc = event.target.src;
      if (currentSrc.startsWith('http')) {
        const fileName = currentSrc.split('/').pop().split('?')[0];
        event.target.src = `/img/${fileName}`;
        event.target.onerror = () => {
          event.target.src = '/img/default-avatar.svg';
          event.target.onerror = null;
        };
      } else {
        event.target.src = '/img/default-avatar.svg';
        event.target.onerror = null;
      }
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
  padding: 16px;

  input {
    flex: 1;
    margin-left: 12px;
    padding: 12px 16px;
    font-size: 18px;
    font-weight: $font-weight-medium;
    color: black !important;
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
  padding: 8px 30px;
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
  background: white;
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
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
  position: relative;
}

.items-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-icon {
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: $color-gray-500;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: $color-red;
    transform: scale(1.15);
  }

  svg {
    width: 20px;
    height: 20px;
  }
}

.align {
  flex: 1;
  padding-right: 40px;
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
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  flex: 1;
  justify-content: center;
  margin: 0 4px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.08);
    
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
  margin-right: 12px;
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