<template>
  <div class="main-wrapper">
    <div class="middle-container">
      <div class="middle">
        <div class="section">
          <img :src="getUserProfileImage(activeUser)" :alt="'Visit profile for ' + (activeUser?.displayName || 'User')"
            class="midle-img" @error="handleImageError" />
          <div class="post-input-container">
            <input @click="focusPostArea" v-model="text" type="text" placeholder="Start a Post" readonly />
            <div v-if="showPostModal" class="post-modal">
              <div class="modal-header">
                <img :src="getUserProfileImage(activeUser)" class="modal-avatar" @error="handleImageError" />
                <div class="user-info">
                  <span class="user-name">{{ activeUser?.displayName || 'Anonymous' }}</span>
                </div>
                <button @click="closePostModal" class="close-btn">&times;</button>
              </div>
              <div class="textarea-container" @dragover.prevent="dragOver = true" @dragenter.prevent="dragOver = true"
                @dragleave.prevent="dragOver = false" @drop.prevent="handleDrop" :class="{ 'drag-over': dragOver }">
                <textarea ref="postTextarea" v-model="postText" placeholder="What do you want to talk about?"
                  class="post-textarea" @input="autoResize"></textarea>
                <div v-if="dragOver" class="drag-overlay">
                  <div class="drag-message">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48"
                      height="48">
                      <path
                        d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                    <p>Drop files here</p>
                  </div>
                </div>
              </div>
              <!-- Media Preview Area -->
              <div v-if="selectedMedia.length > 0" class="media-preview-container">
                <div v-for="(media, index) in selectedMedia" :key="index" class="media-preview-item">
                  <div class="media-preview-wrapper">
                    <img v-if="media.type.startsWith('image/')" :src="media.preview" class="media-preview-img" />
                    <div v-else-if="media.type.startsWith('video/')" class="video-preview-container">
                      <video :src="media.preview" class="media-preview-video" controls></video>
                      <button @click="removeMedia(index)" class="media-remove-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16"
                          height="16">
                          <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                      </button>
                    </div>
                    <div v-else class="media-preview-file">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40"
                        height="40">
                        <path
                          d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                      <span class="file-name">{{ media.name }}</span>
                      <button @click="removeMedia(index)" class="remove-media-btn">&times;</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- File Input (Hidden) -->
              <input ref="fileInput" type="file" multiple accept="image/*,video/*,.pdf,.doc,.docx,.txt"
                @change="handleFileSelect" style="display: none;" />
              <div class="modal-actions">
                <div class="media-buttons">
                  <button @click="selectFiles" class="media-btn" title="Add photos/videos">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24"
                      height="24">
                      <path
                        d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z">
                      </path>
                    </svg>
                    <span>Media</span>
                  </button>
                  <button @click="selectFiles" class="media-btn" title="Add a document">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24"
                      height="24">
                      <path
                        d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                    <span>Document</span>
                  </button>
                </div>
                <button @click="createPost" :disabled="!canPost" class="post-btn"
                  :class="{ active: canPost }">Post</button>
              </div>
            </div>
          </div>
        </div>
        <div class="middle-body">
          <div class="middle-section" @click="openPostModalWithMedia('video')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="middle-video" width="24" height="24" focusable="false">
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
            </svg>
            <div class="span">Video</div>
          </div>
          <div class="middle-section" @click="openPostModalWithMedia('photo')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="middle-photo" width="24" height="24" focusable="false">
              <path
                d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z">
              </path>
            </svg>
            <div class="span">Photo</div>
          </div>
          <div class="middle-section" @click="openPostModalWithMedia('document')">
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
            <img :src="getUserProfileImage(activeUser)"
              :alt="'Visit profile for ' + (activeUser?.displayName || 'User')" class="post-profile-img"
              @error="handleImageError" />
          </div>
          <div class="align">
            <div class="header">
              <span class="post-header">{{ post.name }}</span> <br />
              <span class="id">{{ post.title }}</span>
            </div>
            <div v-if="editingPost === post" class="edit-mode">
              <textarea v-model="editText" class="edit-textarea" @keydown.enter.ctrl="saveEdit(post)"
                @keydown.escape="cancelEdit" placeholder="Edit your post..." rows="3"></textarea>
              <div class="edit-actions">
                <button @click="saveEdit(post)" class="save-btn">Save</button>
                <button @click="cancelEdit" class="cancel-btn">Cancel</button>
              </div>
            </div>
            <span v-else class="post-dec">{{ post.description }}</span>
          </div>
          <div class="post-actions">
            <div class="post-menu">
              <button class="menu-dots" @click="toggleDropdown(post)" title="More options">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.25 8C3.25 8.69 2.69 9.25 2 9.25C1.31 9.25 0.75 8.69 0.75 8C0.75 7.31 1.31 6.75 2 6.75C2.69 6.75 3.25 7.31 3.25 8ZM14 6.75C13.31 6.75 12.75 7.31 12.75 8C12.75 8.69 13.31 9.25 14 9.25C14.69 9.25 15.25 8.69 15.25 8C15.25 7.31 14.69 6.75 14 6.75ZM8 6.75C7.31 6.75 6.75 7.31 6.75 8C6.75 8.69 7.31 9.25 8 9.25C8.69 9.25 9.25 8.69 9.25 8C9.25 7.31 8.69 6.75 8 6.75Z"
                    fill="currentColor"></path>
                </svg>
              </button>
              <div v-if="showDropdown[post.id || post]" class="dropdown-menu">
                <button @click="startEdit(post)" class="dropdown-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16"
                    height="16">
                    <path
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                  Edit
                </button>
              </div>
            </div>
            <button class="delete-icon" @click="deleteImportedPost(post)" title="Delete post">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.78 12.72C14.07 13.01 14.07 13.49 13.78 13.78C13.63 13.93 13.44 14 13.25 14C13.06 14 12.87 13.93 12.72 13.78L8 9.06L3.28 13.78C3.13 13.93 2.94 14 2.75 14C2.56 14 2.37 13.93 2.22 13.78C1.93 13.49 1.93 13.01 2.22 12.72L6.94 8L2.22 3.28C1.93 2.99 1.93 2.51 2.22 2.22C2.51 1.93 2.99 1.93 3.28 2.22L8 6.94L12.72 2.22C13.01 1.93 13.49 1.93 13.78 2.22C14.07 2.51 14.07 2.99 13.78 3.28L9.06 8L13.78 12.72Z"
                  fill="currentColor"></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- Media Display Section -->
        <div v-if="post.media && post.media.length > 0" class="post-media-container">
          <div v-for="(media, index) in post.media" :key="index" class="post-media-item">
            <img v-if="media.type.startsWith('image/')" :src="media.url" class="pro-height-img"
              @error="handleImageError" />
            <div v-else-if="media.type.startsWith('video/')" class="video-container">
              <video :src="media.url" class="pro-height-video" controls></video>
              <button class="video-delete-btn" @click="removeMediaFromPost(post, index)" title="Remove media">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
            <div v-else class="post-file-item">
              <div class="file-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
              </div>
              <div class="file-info">
                <span class="file-name">{{ media.name }}</span>
                <span class="file-size">{{ formatFileSize(media.size) }}</span>
              </div>
              <a :href="media.url" :download="media.name" class="download-btn" title="Download file">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <!-- Legacy image support -->
        <div class="height-img" v-else-if="post.img">
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="wish-match" width="20" height="20" focusable="false">
              <path
                d="M13.96 5H6c-.55 0-1 .45-1 1v10H3V6c0-1.66 1.34-3 3-3h7.96L12 0h2.37L17 4l-2.63 4H12l1.96-3zm5.54 3H19v10c0 .55-.45 1-1 1h-7.96L12 16H9.63L7 20l2.63 4H12l-1.96-3H18c1.66 0 3-1.34 3-3V8h-1.5z">
              </path>
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
import { mapState } from 'vuex'

export default {
  setup() {
    const currentUser = ref(null)
    const getUserProfileImage = (user) => {
      console.log('getUserProfileImage called with user:', user);
      if (user && user.photoURL && user.photoURL !== null && user.photoURL !== '') {
        console.log('Using user photoURL:', user.photoURL);
        return user.photoURL;
      }

      if (user && user.email) {
        const initials = getInitials(user.displayName || user.email);
        const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=0a66c2&color=fff&size=200&bold=true`;
        console.log('Using generated avatar URL:', avatarUrl);
        return avatarUrl;
      }
      return '/static/img/default-avatar.svg';
    }

    const getInitials = (name) => {
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
    }

    const handleImageError = (event) => {
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

    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        currentUser.value = user
      })
    })

    return {
      currentUser,
      getUserProfileImage,
      handleImageError
    }
  },
  computed: {
    ...mapState(['user']),
    activeUser() {
      return this.user || this.currentUser
    },
    canPost() {
      const hasText = this.postText.trim().length > 0;
      const hasProcessedMedia = this.selectedMedia.length > 0 &&
        this.selectedMedia.every(m => !m.processing && (m.url || m.preview));
      return hasText || hasProcessedMedia;
    }
  },

  data() {
    return {
      importData: [],
      text: '',
      postText: '',
      email: '',
      editingPost: null,
      editText: '',
      showDropdown: {},
      showPostModal: false,
      selectedMedia: [],
      dragOver: false
    }
  },

  mounted() {
    if (process.client) {
      this.loadPostsFromStorage()

      if (typeof window !== 'undefined') {
        window.debugVideoStorage = this.debugVideoStorage;
        window.debugImageStorage = this.debugImageStorage;
        window.testMediaPersistence = this.testMediaPersistence;
        window.forceReloadPosts = this.forceReloadPosts;
        window.clearAllSavedPosts = this.clearAllSavedPosts;
        window.testVideoStorageFlow = this.testVideoStorageFlow;
        window.validateAndFixVideoData = this.validateAndFixVideoData;
        window.validateAndFixImageData = this.validateAndFixImageData;
        window.debugStorageIssue = this.debugStorageIssue;
        
        console.log('🎥📷 === MEDIA DEBUG METHODS AVAILABLE ===');
        console.log('  - window.debugVideoStorage() - Check video data in localStorage');
        console.log('  - window.debugImageStorage() - Check image data in localStorage');
        console.log('  - window.testMediaPersistence() - Test all media persistence');
        console.log('  - window.forceReloadPosts() - Force reload posts from storage');
        console.log('  - window.clearAllSavedPosts() - Clear all saved posts (for testing)');
        console.log('  - window.testVideoStorageFlow() - Test current video storage state');
        console.log('  - window.validateAndFixVideoData() - Validate and fix video data integrity');
        console.log('  - window.validateAndFixImageData() - Validate and fix image data integrity');
        console.log('  - window.debugStorageIssue() - Comprehensive storage debugging');
        console.log('🎥📷 === USE THESE TO DEBUG MEDIA ISSUES ===');
        
        setTimeout(async () => {
          await this.validateAndFixVideoData();
          await this.validateAndFixImageData();
        }, 1000);
      }
    }
    document.addEventListener('click', this.handleClickOutside)
  },

  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  },

  watch: {
    user: {
      handler(newUser, oldUser) {
        if (newUser && oldUser && newUser.displayName !== oldUser.displayName) {
          this.loadPostsFromStorage()
        }
      },
      deep: true
    }
  },

  methods: {
    async loadPostsFromStorage() {
      try {
        this.importData = [...postData];

        if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
          console.log('localStorage not available (SSR mode)');
          return;
        }

        const savedPosts = await this.safeGetItem('userPosts');
        if (savedPosts) {
          const userPosts = JSON.parse(savedPosts);
          console.log('Loading user posts from localStorage:', userPosts.length, 'posts');

          const processedUserPosts = userPosts.map(post => {
            const processedPost = { ...post };
            if (processedPost.media && Array.isArray(processedPost.media)) {
              processedPost.media = processedPost.media.map(media => {
                const mediaItem = {
                  type: media.type,
                  name: media.name,
                  size: media.size,
                  url: media.url,
                  preview: media.preview || media.url,
                  isTemporary: false
                };

                if (media.type && media.type.startsWith('video/')) {
                  console.log(`Loading video: ${media.name}, type: ${media.type}, hasUrl: ${!!media.url}`);
                  if (media.url) {
                    mediaItem.url = media.url;
                    mediaItem.preview = media.preview || media.url;
                    console.log(`✅ Video loaded successfully: ${media.name}`);
                  } else if (media.preview) {
                    mediaItem.url = media.preview;
                    mediaItem.preview = media.preview;
                    console.log(`✅ Video loaded from preview: ${media.name}`);
                  } else {
                    console.error(`❌ No video data found for ${media.name}`);
                  }
                }
                return mediaItem;
              });

              const videoCount = processedPost.media.filter(m => m.type.startsWith('video/')).length;
              console.log(`Post ${post.id} has ${processedPost.media.length} media items (${videoCount} videos)`);
            } else {
              processedPost.media = [];
            }
            return processedPost;
          });

          this.importData = [...processedUserPosts, ...this.importData];

          const totalVideos = processedUserPosts.reduce((total, post) => {
            return total + (post.media ? post.media.filter(m => m.type.startsWith('video/')).length : 0);
          }, 0);

          console.log('Successfully loaded posts from localStorage. Total posts:', this.importData.length);
          console.log(`Total videos loaded: ${totalVideos}`);
          processedUserPosts.forEach((post, index) => {
            if (post.media && post.media.some(m => m.type.startsWith('video/'))) {
              const videos = post.media.filter(m => m.type.startsWith('video/'));
              console.log(`Loaded video post ${index + 1} (ID: ${post.id}): ${videos.length} video(s)`);
            }
          });
        } else {
          console.log('No saved posts found in localStorage');
        }
      } catch (error) {
        console.error('Error loading posts from storage:', error);
        this.importData = [...postData];
        this.showErrorNotification('Failed to load saved posts');
      }
    },

    async saveUserPostsToStorage() {
      try {
        if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
          console.warn('localStorage not available, cannot save posts');
          return;
        }

        const userPosts = this.importData.filter(post => post.id).map(post => {
          const postCopy = {
            ...post,
            id: post.id,
            name: post.name,
            title: post.title,
            description: post.description,
            avatar: post.avatar,
            img: post.img || null,
            timestamp: post.timestamp || Date.now()
          };

          if (postCopy.media && postCopy.media.length > 0) {
            postCopy.media = postCopy.media.map(media => {
              const mediaItem = {
                type: media.type,
                name: media.name,
                size: media.size,
                url: media.url,
                preview: media.preview || media.url,
                isTemporary: false
              };

              if (media.type && media.type.startsWith('video/')) {
                console.log(`Saving video: ${media.name}, type: ${media.type}, size: ${media.size}`);
                if (media.url) {
                  mediaItem.url = media.url;
                  mediaItem.preview = media.preview || media.url;
                  console.log(`✅ Video URL saved: ${media.url.substring(0, 50)}...`);
                } else if (media.preview) {
                  mediaItem.url = media.preview;
                  mediaItem.preview = media.preview;
                  console.log(`✅ Video URL saved from preview: ${media.preview.substring(0, 50)}...`);
                } else {
                  console.error(`❌ No valid video data found for ${media.name}`);
                }
              } else if (media.type && media.type.startsWith('image/')) {
                console.log(`Saving image: ${media.name}, type: ${media.type}, size: ${media.size}`);
                if (media.url) {
                  mediaItem.url = media.url;
                  mediaItem.preview = media.preview || media.url;
                  console.log(`✅ Image URL saved: ${media.url.substring(0, 50)}...`);
                } else if (media.preview) {
                  mediaItem.url = media.preview;
                  mediaItem.preview = media.preview;
                  console.log(`✅ Image URL saved from preview: ${media.preview.substring(0, 50)}...`);
                } else {
                  console.error(`❌ No valid image data found for ${media.name}`);
                }
              }
              return mediaItem;
            });
            const videoCount = postCopy.media.filter(m => m.type.startsWith('video/')).length;
            const imageCount = postCopy.media.filter(m => m.type.startsWith('image/')).length;
            console.log(`Post ${post.id} has ${postCopy.media.length} media items, including ${videoCount} videos and ${imageCount} images`);
          } else {
            postCopy.media = [];
          }
          return postCopy;
        });

        console.log('Saving user posts to localStorage:', userPosts.length, 'posts');

        const videoPosts = userPosts.filter(post =>
          post.media && post.media.some(m => m.type.startsWith('video/'))
        );
        console.log(`Found ${videoPosts.length} posts with videos to save`);

        try {
          const videoPostsToSave = userPosts.filter(post => 
            post.media && post.media.some(m => m.type.startsWith('video/'))
          );
          
          if (videoPostsToSave.length > 0) {
            console.log(`🎥 Pre-save validation: Found ${videoPostsToSave.length} posts with videos`);
            videoPostsToSave.forEach(post => {
              const videos = post.media.filter(m => m.type.startsWith('video/'));
              videos.forEach(video => {
                if (!video.url) {
                  console.error(`❌ Video ${video.name} has no URL before saving!`);
                }
              });
            });
          }

          const validationErrors = [];
          userPosts.forEach((post, index) => {
            const errors = this.validatePostData(post);
            if (errors.length > 0) {
              validationErrors.push(`Post ${index + 1} (ID: ${post.id}): ${errors.join(', ')}`);
            }
          });

          if (validationErrors.length > 0) {
            console.warn('⚠️ Validation warnings found:', validationErrors);
          }

          const dataToSave = JSON.stringify(userPosts);
          console.log(`💾 Attempting to save ${dataToSave.length} characters to localStorage`);
          console.log(`💾 Data size: ${(dataToSave.length / 1024 / 1024).toFixed(2)} MB`);
          
          await this.safeSetItem('userPosts', dataToSave);
          console.log('✅ Successfully saved to localStorage');
        } catch (storageError) {
          console.error('❌ Failed to save to localStorage:', storageError);
          console.error('❌ Error details:', {
            name: storageError.name,
            message: storageError.message,
            stack: storageError.stack
          });
          this.showStorageErrorNotification('save');
          return;
        }

        const savedData = await this.safeGetItem('userPosts');
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          console.log('Verification: Successfully saved', parsedData.length, 'posts to localStorage');

          const totalMedia = parsedData.reduce((total, post) => {
            return total + (post.media ? post.media.length : 0);
          }, 0);

          const totalVideos = parsedData.reduce((total, post) => {
            return total + (post.media ? post.media.filter(m => m.type.startsWith('video/')).length : 0);
          }, 0);

          console.log('Total media items saved:', totalMedia);
          console.log('Total video items saved:', totalVideos);

          // Verify each video post
          parsedData.forEach((post, index) => {
            if (post.media && post.media.some(m => m.type.startsWith('video/'))) {
              const videos = post.media.filter(m => m.type.startsWith('video/'));
              console.log(`Post ${index + 1} (ID: ${post.id}) has ${videos.length} video(s):`,
                videos.map(v => ({ name: v.name, hasUrl: !!v.url }))
              );
            }
          });
        } else {
          console.error('Verification failed: Posts not found in localStorage after save');
        }
      } catch (error) {
        console.error('Error saving posts to storage:', error);
        this.showStorageErrorNotification('save');
      }
    },

    async addItems() {
      if (this.text.trim()) {
        const newPost = {
          id: Date.now(),
          name: this.activeUser ? this.activeUser.displayName : 'Anonymous',
          title: this.activeUser ? this.activeUser.email : 'anonymous@user.com',
          description: this.text,
          avatar: this.activeUser ? this.activeUser.photoURL : '/img/default-avatar.svg',
          img: null
        };
        this.importData.unshift(newPost);
        this.text = '';
        try {
          await this.saveUserPostsToStorage();
        } catch (error) {
          console.error('Failed to save post:', error);
          this.showStorageErrorNotification('save');
        }
      }
    },

    focusPostArea() {
      this.showPostModal = true;
      this.text = '';
      this.$nextTick(() => {
        if (this.$refs.postTextarea) {
          this.$refs.postTextarea.focus();
        }
      });
    },

    closePostModal() {
      this.showPostModal = false;
      this.postText = '';
      this.selectedMedia = [];
      this.text = '';
    },

    openPostModalWithMedia(mediaType) {
      this.showPostModal = true;
      this.$nextTick(() => {
        if (mediaType === 'photo') {
          this.selectFiles('image/*');
        } else if (mediaType === 'video') {
          this.selectFiles('video/*');
        } else if (mediaType === 'document') {
          this.selectFiles('.pdf,.doc,.docx,.txt,.ppt,.pptx,.xls,.xlsx');
        }
      });
    },

    selectFiles(accept = 'image/*,video/*,.pdf,.doc,.docx,.txt,.ppt,.pptx,.xls,.xlsx') {
      if (this.$refs.fileInput) {
        this.$refs.fileInput.accept = accept;
        this.$refs.fileInput.click();
      }
    },

    handleFileSelect(event) {
      const files = Array.from(event.target.files);
      files.forEach(file => this.processFile(file));
      event.target.value = '';
    },

    handleDrop(event) {
      this.dragOver = false;
      const files = Array.from(event.dataTransfer.files);
      files.forEach(file => this.processFile(file));
    },

    processFile(file) {
      const storageHealth = this.checkStorageHealth();
      if (!storageHealth.available) {
        this.showStorageErrorNotification('process');
        return;
      }

      if (file.size > 100 * 1024 * 1024) {
        this.showErrorNotification('File size must be less than 100MB');
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        console.warn(`⚠️ Large file detected: ${file.name} (${this.formatFileSize(file.size)}). This may cause storage issues.`);
      }

      console.log(`🔄 Starting to process file: ${file.name}, type: ${file.type}`);

      const mediaItem = {
        file: file,
        name: file.name,
        type: file.type,
        size: file.size,
        preview: null,
        url: null,
        isTemporary: false,
        processing: true
      };

      this.selectedMedia.push(mediaItem);
      const mediaIndex = this.selectedMedia.length - 1;

      if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.selectedMedia[mediaIndex].preview = e.target.result;
          this.selectedMedia[mediaIndex].url = e.target.result;
          this.selectedMedia[mediaIndex].processing = false;
          
          if (file.type.startsWith('video/')) {
            console.log(`🎥 ✅ Successfully processed video file: ${file.name}`);
            console.log(`  Type: ${file.type}`);
            console.log(`  Size: ${file.size} bytes (${this.formatFileSize(file.size)})`);
            console.log(`  Data URL length: ${e.target.result.length} characters`);
            console.log(`  Data URL starts with: ${e.target.result.substring(0, 50)}...`);
            console.log(`  Video ready for posting: ${!!e.target.result}`);
            
            // Validate video data integrity
            if (!e.target.result || !e.target.result.startsWith('data:video/')) {
              console.error(`❌ Invalid video data format for ${file.name}`);
              this.showErrorNotification(`Invalid video format: ${file.name}`);
              return;
            }
            if (!this.selectedMedia[mediaIndex].url) {
              console.error(`❌ Video URL not set properly for ${file.name}`);
              this.selectedMedia[mediaIndex].url = e.target.result;
            }          
            console.log(`🎥 Video validation passed for ${file.name}`);
          } else if (file.type.startsWith('image/')) {
            console.log(`📷 ✅ Successfully processed image file: ${file.name}`);
            console.log(`  Type: ${file.type}`);
            console.log(`  Size: ${file.size} bytes (${this.formatFileSize(file.size)})`);
            console.log(`  Data URL length: ${e.target.result.length} characters`);
            console.log(`  Data URL starts with: ${e.target.result.substring(0, 50)}...`);
            console.log(`  Image ready for posting: ${!!e.target.result}`);
            
            if (!e.target.result || !e.target.result.startsWith('data:image/')) {
              console.error(`❌ Invalid image data format for ${file.name}`);
              this.showErrorNotification(`Invalid image format: ${file.name}`);
              this.selectedMedia.splice(mediaIndex, 1);
              return;
            }
            
            if (!this.selectedMedia[mediaIndex].url) {
              console.error(`❌ Image URL not set properly for ${file.name}`);
              this.selectedMedia[mediaIndex].url = e.target.result;
            }
            
            try {
              const testKey = `__image_test_${Date.now()}__`;
              const testData = JSON.stringify({ url: e.target.result });
              localStorage.setItem(testKey, testData);
              localStorage.removeItem(testKey);
              console.log(`📷 Image storage test passed for ${file.name}`);
            } catch (storageError) {
              console.error(`❌ Image too large for localStorage: ${file.name}`, storageError);
              this.showErrorNotification(`Image file too large to save: ${file.name}. Please use a smaller image.`);
              this.selectedMedia.splice(mediaIndex, 1);
              return;
            }
            console.log(`📷 Image validation passed for ${file.name}`);
          }
          this.$forceUpdate();
        };
        reader.onerror = (e) => {
          console.error('❌ Error reading file:', file.name, e);
          this.showErrorNotification(`Failed to process file: ${file.name}`);
          this.selectedMedia.splice(mediaIndex, 1);
        };
        reader.readAsDataURL(file);
      } else {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.selectedMedia[mediaIndex].url = e.target.result;
          this.selectedMedia[mediaIndex].preview = e.target.result;
          this.selectedMedia[mediaIndex].processing = false;
          console.log(`📄 ✅ Successfully processed document file: ${file.name}, size: ${file.size} bytes`);
          this.$forceUpdate();
        };
        reader.onerror = (e) => {
          console.error('❌ Error reading document file:', file.name, e);
          this.showErrorNotification(`Failed to process document: ${file.name}`);
          this.selectedMedia.splice(mediaIndex, 1);
        };
        reader.readAsDataURL(file);
      }
    },

    removeMedia(index) {
      this.selectedMedia.splice(index, 1);
    },

    autoResize(event) {
      const textarea = event.target;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    },

    async createPost() {
      if (!this.canPost) return;
      console.log('🚀 Starting post creation...');
      console.log('Selected media items:', this.selectedMedia.length)
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        this.showErrorNotification('Cannot save posts: localStorage not available');
        return;
      }

      const processingMedia = this.selectedMedia.filter(m => m.processing);
      if (processingMedia.length > 0) {
        console.log(`⏳ Waiting for ${processingMedia.length} media items to finish processing...`);
        this.showErrorNotification('Please wait for all media to finish processing');
        return;
      }

      const invalidMedia = this.selectedMedia.filter(m => !m.url && !m.preview);
      if (invalidMedia.length > 0) {
        console.error('❌ Found media without URLs:', invalidMedia);
        this.showErrorNotification('Some media failed to process. Please try again.');
        return;
      }

      const processedMedia = this.selectedMedia.map(media => {
        const mediaItem = {
          type: media.type,
          name: media.name,
          size: media.size,
          url: media.url || media.preview,
          preview: media.preview || media.url,
          isTemporary: false
        };

        if (media.type && media.type.startsWith('video/')) {
          console.log(`🎥 Processing video for post: ${media.name}, type: ${media.type}`);
          console.log(`  Original URL present: ${!!media.url}`);
          console.log(`  Original preview present: ${!!media.preview}`);
          
          // Ensure video data is preserved
          if (media.url) {
            mediaItem.url = media.url;
            mediaItem.preview = media.preview || media.url;
            console.log(`  ✅ Video URL set: ${media.url.substring(0, 50)}...`);
          } else if (media.preview) {
            mediaItem.url = media.preview;
            mediaItem.preview = media.preview;
            console.log(`  ✅ Video URL set from preview: ${media.preview.substring(0, 50)}...`);
          } else {
            console.error(`  ❌ CRITICAL: No URL or preview found for video ${media.name}!`);
            return null;
          }
          
          // Final validation
          if (!mediaItem.url) {
            console.error(`  ❌ CRITICAL: Video ${media.name} still has no URL after processing!`);
            return null;
          }
        } else if (media.type && media.type.startsWith('image/')) {
          console.log(`📷 Processing image for post: ${media.name}, type: ${media.type}`);
          console.log(`  Original URL present: ${!!media.url}`);
          console.log(`  Original preview present: ${!!media.preview}`);
          
          // Ensure image data is preserved
          if (media.url) {
            mediaItem.url = media.url;
            mediaItem.preview = media.preview || media.url;
            console.log(`  ✅ Image URL set: ${media.url.substring(0, 50)}...`);
          } else if (media.preview) {
            mediaItem.url = media.preview;
            mediaItem.preview = media.preview;
            console.log(`  ✅ Image URL set from preview: ${media.preview.substring(0, 50)}...`);
          } else {
            console.error(`  ❌ CRITICAL: No URL or preview found for image ${media.name}!`);
            return null;
          }
          
          // Final validation
          if (!mediaItem.url) {
            console.error(`  ❌ CRITICAL: Image ${media.name} still has no URL after processing!`);
            return null;
          }
        }
        return mediaItem;
      }).filter(media => media !== null);

      const newPost = {
        id: Date.now(),
        name: this.activeUser ? this.activeUser.displayName : 'Anonymous',
        title: this.activeUser ? this.activeUser.email : 'anonymous@user.com',
        description: this.postText,
        avatar: this.activeUser ? this.activeUser.photoURL : '/img/default-avatar.svg',
        media: processedMedia,
        img: null,
        timestamp: Date.now(),
        createdAt: new Date().toISOString()
      };

      console.log('📝 Creating new post with media:', processedMedia.length, 'items');

      // Log media-specific information
      const videoMedia = processedMedia.filter(m => m.type.startsWith('video/'));
      const imageMedia = processedMedia.filter(m => m.type.startsWith('image/'));
      
      if (videoMedia.length > 0) {
        console.log(`🎥 Post contains ${videoMedia.length} video(s):`);
        videoMedia.forEach((v, index) => {
          console.log(`  Video ${index + 1}:`, {
            name: v.name,
            type: v.type,
            hasUrl: !!v.url,
            urlLength: v.url ? v.url.length : 0,
            urlType: v.url?.startsWith('data:video/') ? 'Data URL (base64)' : 'Other'
          });
        });
      }
      
      if (imageMedia.length > 0) {
        console.log(`📷 Post contains ${imageMedia.length} image(s):`);
        imageMedia.forEach((img, index) => {
          console.log(`  Image ${index + 1}:`, {
            name: img.name,
            type: img.type,
            hasUrl: !!img.url,
            urlLength: img.url ? img.url.length : 0,
            urlType: img.url?.startsWith('data:image/') ? 'Data URL (base64)' : 'Other'
          });
        });
      }

      this.importData.unshift(newPost);
      console.log('📌 Post added to importData. Total posts:', this.importData.length);
      console.log('💾 Saving to localStorage...');
        console.log('💾 Post to save:', {
        id: newPost.id,
        description: newPost.description?.substring(0, 50),
        mediaCount: newPost.media.length,
        videoCount: newPost.media.filter(m => m.type.startsWith('video/')).length,
        imageCount: newPost.media.filter(m => m.type.startsWith('image/')).length
      });

      try {
        await this.saveUserPostsToStorage();
        console.log('✅ Post successfully saved to localStorage');
      } catch (saveError) {
        console.error('❌ Error saving post:', saveError);
        this.importData = this.importData.filter(p => p.id !== newPost.id);
        this.showStorageErrorNotification('save');
        return;
      }

      console.log('🔍 Immediate verification...');
      console.log('🔍 Immediate verification...');
      // Note: verification is async now, so we can't fully block here, but we can try
      this.safeGetItem('userPosts').then(immediateCheck => {
        if (immediateCheck) {
          const posts = JSON.parse(immediateCheck);
          const justSaved = posts.find(p => p.id === newPost.id);
            if (justSaved) {
              console.log('✅ IMMEDIATE CHECK: Post found in localStorage/IndexedDB');
              if (justSaved.media && justSaved.media.length > 0) {
                const videos = justSaved.media.filter(m => m.type.startsWith('video/'));
                const images = justSaved.media.filter(m => m.type.startsWith('image/'));
                console.log(`✅ IMMEDIATE CHECK: Post has ${videos.length} video(s) and ${images.length} image(s) saved`);
              }
            } else {
              console.log('❌ IMMEDIATE CHECK: Post NOT found in storage!');
            }
        }
      });

      // Delayed verification
      setTimeout(async () => {
        console.log('🔍 Delayed verification...');
        const savedPosts = await this.safeGetItem('userPosts');
        if (savedPosts) {
          const posts = JSON.parse(savedPosts);
          const savedPost = posts.find(p => p.id === newPost.id);
          if (savedPost && savedPost.media && savedPost.media.length > 0) {
            const savedVideos = savedPost.media.filter(m => m.type.startsWith('video/'));
            const savedImages = savedPost.media.filter(m => m.type.startsWith('image/'));
            
            if (savedVideos.length > 0) {
              console.log(`✅ DELAYED VERIFICATION: Video post saved successfully! Found ${savedVideos.length} video(s) in localStorage`);
              savedVideos.forEach((video, index) => {
                console.log(`  Video ${index + 1}: ${video.name}, URL present: ${!!video.url}`);
              });
            }
            
            if (savedImages.length > 0) {
              console.log(`✅ DELAYED VERIFICATION: Image post saved successfully! Found ${savedImages.length} image(s) in localStorage`);
              savedImages.forEach((image, index) => {
                console.log(`  Image ${index + 1}: ${image.name}, URL present: ${!!image.url}`);
              });
            }
            
            if (savedVideos.length === 0 && savedImages.length === 0) {
              console.log('❌ DELAYED VERIFICATION: No videos or images found in saved post!');
            }
          } else {
            console.log('❌ DELAYED VERIFICATION: Post not found or has no media!');
          }
        } else {
          console.log('❌ DELAYED VERIFICATION: No localStorage data found!');
        }
      }, 500);

      this.closePostModal();

      const hasMedia = this.selectedMedia.length > 0;
      if (hasMedia) {
        const mediaTypes = [...new Set(this.selectedMedia.map(m => m.type.split('/')[0]))];
        const hasVideos = this.selectedMedia.some(m => m.type.startsWith('video/'));

        if (hasVideos) {
          this.showVideoUploadSuccessNotification(mediaTypes);
        } else {
          this.showMediaUploadNotification(mediaTypes);
        }
      }
    },

    formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    },

    async deleteImportedPost(post) {
      this.importData = this.importData.filter(p => p !== post);
      if (post.id) {
        try {
          await this.saveUserPostsToStorage();
        } catch (error) {
          console.error('Failed to save after deleting post:', error);
          this.showStorageErrorNotification('save');
        }
      }

      this.hideDropdown(post);
      if (this.editingPost === post) {
        this.cancelEdit();
      }
    },

    toggleDropdown(post) {
      const key = post.id || post;
      this.showDropdown = {
        ...this.showDropdown,
        [key]: !this.showDropdown[key]
      };

      Object.keys(this.showDropdown).forEach(k => {
        if (k !== key.toString()) {
          this.showDropdown[k] = false;
        }
      });
    },

    hideDropdown(post) {
      const key = post.id || post;
      this.showDropdown = {
        ...this.showDropdown,
        [key]: false
      };
    },

    startEdit(post) {
      this.editingPost = post;
      this.editText = post.description;
      this.hideDropdown(post);
    },

    async saveEdit(post) {
      if (this.editText.trim()) {
        post.description = this.editText.trim();
        if (post.id) {
          try {
            await this.saveUserPostsToStorage();
          } catch (error) {
            console.error('Failed to save edited post:', error);
            this.showStorageErrorNotification('save');
          }
        }
      }
      this.cancelEdit();
    },

    cancelEdit() {
      this.editingPost = null;
      this.editText = '';
    },

    handleClickOutside(event) {
      if (!event.target.closest('.post-menu') && !event.target.closest('.dropdown-menu')) {
        this.showDropdown = {};
      }
    },

    async removeMediaFromPost(post, mediaIndex) {
      if (post.media && post.media[mediaIndex]) {
        if (post.media[mediaIndex].url && post.media[mediaIndex].url.startsWith('blob:')) {
          URL.revokeObjectURL(post.media[mediaIndex].url);
        }

        const mediaType = post.media[mediaIndex].type.startsWith('video/') ? 'Video' :
          post.media[mediaIndex].type.startsWith('image/') ? 'Image' : 'File';
        post.media.splice(mediaIndex, 1);
        if (post.id) {
          try {
            await this.saveUserPostsToStorage();
          } catch (error) {
            console.error('Failed to save after removing media:', error);
            this.showStorageErrorNotification('save');
          }
        }
        this.showMediaRemovedNotification(mediaType);
      }
    },

    showMediaRemovedNotification(mediaType = 'Media') {
      const notification = document.createElement('div');
      notification.textContent = `${mediaType} removed successfully`;
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #333;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 10000;
        font-family: inherit;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease`;

      document.body.appendChild(notification);

      setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 300);
      }, 2000);
    },

    showMediaUploadNotification(mediaTypes = []) {
      const notification = document.createElement('div');
      const typeText = mediaTypes.length > 0 ? mediaTypes.join(' & ') : 'Media';
      notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
          </svg>
          <span>${typeText} uploaded and saved successfully! Will persist after refresh.</span>
        </div>
      `;
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #057642;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 10000;
        font-family: inherit;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
        max-width: 350px`;

      document.body.appendChild(notification);
      setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 300);
      }, 4000);
    },

    showVideoUploadSuccessNotification(mediaTypes = []) {
      const notification = document.createElement('div');
      const videoCount = this.selectedMedia.filter(m => m.type.startsWith('video/')).length;
      const typeText = mediaTypes.length > 0 ? mediaTypes.join(' & ') : 'Media';

      notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
          </svg>
          <span>🎥 ${videoCount} Video${videoCount > 1 ? 's' : ''} & ${typeText} saved to localStorage! Data will persist after page refresh.</span>
        </div>`;
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #057642;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 10000;
        font-family: inherit;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
        max-width: 400px;
        line-height: 1.4;
      `;

      document.body.appendChild(notification);
      setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 300);
      }, 5000);
    },

    showErrorNotification(message = 'An error occurred') {
      const notification = document.createElement('div');
      notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
          </svg>
          <span>${message}</span>
        </div>
      `;
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #cc1016;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 10000;
        font-family: inherit;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
        max-width: 350px;
      `;

      document.body.appendChild(notification);
      setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 300);
      }, 4000);
    },

    async testMediaPersistence() {
      console.log('=== ENHANCED MEDIA PERSISTENCE TEST ===');

      // Check if localStorage is available
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        console.error('localStorage not available for testing');
        return;
      }

      const savedPosts = await this.safeGetItem('userPosts');
      if (savedPosts) {
        const userPosts = JSON.parse(savedPosts);
        console.log('Found', userPosts.length, 'saved posts');
        let totalVideos = 0;
        let totalImages = 0;
        let totalOtherMedia = 0;

        userPosts.forEach((post, index) => {
          const videos = post.media?.filter(m => m.type.startsWith('video/')) || [];
          const images = post.media?.filter(m => m.type.startsWith('image/')) || [];
          const others = post.media?.filter(m => !m.type.startsWith('video/') && !m.type.startsWith('image/')) || [];

          totalVideos += videos.length;
          totalImages += images.length;
          totalOtherMedia += others.length;

          console.log(`Post ${index + 1}:`, {
            id: post.id,
            description: post.description?.substring(0, 50) + '...',
            timestamp: post.timestamp,
            mediaCount: post.media?.length || 0,
            videoCount: videos.length,
            imageCount: images.length,
            otherMediaCount: others.length
          });

          if (post.media && post.media.length > 0) {
            post.media.forEach((media, mediaIndex) => {
              console.log(`  Media ${mediaIndex + 1}:`, {
                type: media.type,
                name: media.name,
                size: media.size,
                hasUrl: !!media.url,
                urlType: media.url?.startsWith('data:') ? 'base64' :
                  media.url?.startsWith('blob:') ? 'blob' : 'other',
                urlLength: media.url?.length || 0,
                isVideo: media.type.startsWith('video/')
              });

              if (media.type.startsWith('video/')) {
                console.log(`    🎥 VIDEO DETAILS:`, {
                  canPlay: !!media.url,
                  urlValid: media.url && (media.url.startsWith('data:') || media.url.startsWith('blob:')),
                  previewMatches: media.preview === media.url
                });
              }
            });
          }
        });

        console.log('=== SUMMARY ===');
        console.log(`Total Videos: ${totalVideos}`);
        console.log(`Total Images: ${totalImages}`);
        console.log(`Total Other Media: ${totalOtherMedia}`);
        console.log(`Total Posts: ${userPosts.length}`);
      } else {
        console.log('No saved posts found in localStorage');
      }
      console.log('=== END ENHANCED TEST ===');
    },

    forceReloadPosts() {
      console.log('🔄 Force reloading posts from storage...');

      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        console.error('localStorage not available for reload');
        return;
      }
      this.importData = [];
      this.$nextTick(() => {
        this.loadPostsFromStorage();
        this.testMediaPersistence();
      });
    },

    // Debug method to check localStorage video data
    async debugVideoStorage() {
    console.log('🎥 === VIDEO STORAGE DEBUG ===');
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        console.error('localStorage not available for debug');
        return;
      }

      const savedPosts = await this.safeGetItem('userPosts');
      if (savedPosts) {
        try {
          const posts = JSON.parse(savedPosts);
          const videoPosts = posts.filter(post =>
            post.media && post.media.some(m => m.type.startsWith('video/'))
          );

          console.log(`Found ${videoPosts.length} posts with videos in localStorage`);
          videoPosts.forEach((post, index) => {
            const videos = post.media.filter(m => m.type.startsWith('video/'));
            console.log(`Video Post ${index + 1} (ID: ${post.id}):`);
            console.log(`  Description: ${post.description?.substring(0, 50)}...`);
            console.log(`  Videos: ${videos.length}`);

            videos.forEach((video, vIndex) => {
              console.log(`Video ${vIndex + 1}:`);
              console.log(`Name: ${video.name}`);
              console.log(`Type: ${video.type}`);
              console.log(`Size: ${video.size} bytes`);
              console.log(`Has URL: ${!!video.url}`);
              console.log(`URL Type: ${video.url?.startsWith('data:') ? 'Data URL (base64)' : 'Other'}`);
              console.log(`URL Length: ${video.url?.length || 0} characters`);
            });
          });

          return videoPosts;
        } catch (error) {
          console.error('Error parsing localStorage data:', error);
        }
      } else {
        console.log('No posts found in localStorage');
      }
      console.log('🎥 === END VIDEO STORAGE DEBUG ===');
    },

    clearAllSavedPosts() {
      console.log('🗑️ Clearing all saved posts from localStorage...');
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        console.error('localStorage not available for clearing');
        return;
      }

      try {
        this.safeRemoveItem('userPosts');
        this.importData = [...postData];
        console.log('✅ All saved posts cleared. Refreshing display...');
        this.loadPostsFromStorage();
      } catch (error) {
        console.error('❌ Error clearing saved posts:', error);
        this.showErrorNotification('Failed to clear saved posts');
      }
    },

    // Method to test video storage step by step
    async testVideoStorageFlow() {
      console.log('🔬 === TESTING VIDEO STORAGE FLOW ===');

      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        console.error('localStorage not available for testing');
        return;
      }

      console.log('1. Current importData length:', this.importData.length);
      console.log('2. Current selectedMedia length:', this.selectedMedia.length);

      if (this.selectedMedia.length > 0) {
        console.log('3. Selected media details:');
        this.selectedMedia.forEach((media, index) => {
          console.log(`   Media ${index + 1}:`, {
            name: media.name,
            type: media.type,
            processing: media.processing,
            hasUrl: !!media.url,
            hasPreview: !!media.preview
          });
        });
      }

      console.log('4. Checking localStorage current state...');
      const savedPosts = await this.safeGetItem('userPosts');
      if (savedPosts) {
        const posts = JSON.parse(savedPosts);
        console.log(`   Found ${posts.length} saved posts in localStorage`);
        const videoPosts = posts.filter(p => p.media && p.media.some(m => m.type.startsWith('video/')));
        console.log(`   ${videoPosts.length} of them contain videos`);
      } else {
        console.log('   No posts found in localStorage');
      }
      console.log('🔬 === END TEST ===');
    },

    // Method to check localStorage quota and availability
    checkStorageHealth() {
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return { available: false, error: 'localStorage not available (SSR mode)' };
      }

      try {
        const testKey = '__storage_test__';
        const testValue = 'test';
        localStorage.setItem(testKey, testValue);
        const retrieved = localStorage.getItem(testKey);
        localStorage.removeItem(testKey);
        if (retrieved !== testValue) {
          return { available: false, error: 'localStorage read/write test failed' };
        }

        // Check available space (approximate)
        let used = 0;
        for (let key in localStorage) {
          if (localStorage.hasOwnProperty(key)) {
            used += localStorage[key].length + key.length;
          }
        }

        return {
          available: true,
          used: used,
          usedMB: (used / (1024 * 1024)).toFixed(2),
          error: null
        };
      } catch (error) {
        return {
          available: false,
          error: error.name === 'QuotaExceededError' ? 'Storage quota exceeded' : error.message
        };
      }
    },

    // Enhanced error notification with storage health check
    showStorageErrorNotification(operation = 'save') {
      const health = this.checkStorageHealth();
      let message = `Failed to ${operation} data.`;

      console.error('🚨 STORAGE ERROR DETAILS:', {
        operation,
        health,
        available: health.available,
        error: health.error,
        usedMB: health.usedMB
      });

      if (!health.available) {
        if (health.error.includes('quota')) {
          message += ' Storage is full. Please delete some posts or media.';
        } else if (health.error.includes('SSR')) {
          message += ' Please wait for page to fully load.';
        } else {
          message += ` Storage error: ${health.error}`;
        }
      }
      this.showErrorNotification(message);
    },

    async safeGetItem(key) {
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        console.warn('localStorage not available (SSR mode)');
        return null;
      }
      try {
        let item = localStorage.getItem(key);
          if (!item) {
           item = await this.fallbackGetItem(key);
        }

        if (item && item.startsWith('COMPRESSED:')) {
          const compressed = item.substring(11);
          return this.decompressData(compressed);
        }
        return item;
      } catch (error) {
        console.error(`Error reading from localStorage (key: ${key}):`, error);
        return await this.fallbackGetItem(key);
      }
    },

    async safeSetItem(key, value, retryCount = 0) {
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        throw new Error('localStorage not available');
      }
      
      const maxRetries = 3;
      const originalSize = value.length;
      
      try {
        localStorage.setItem(key, value);
        console.log(`✅ Successfully saved ${key} (${this.formatFileSize(originalSize)})`);
        return true;
      } catch (error) {
        console.warn(`❌ Failed to save ${key} (attempt ${retryCount + 1}/${maxRetries + 1}):`, error.message);
        
        try {
          const compressed = this.compressData(value);
          const compressedData = 'COMPRESSED:' + compressed;
          
          if (compressedData.length < originalSize * 0.8) { 
            localStorage.setItem(key, compressedData);
            console.log(`✅ Successfully saved ${key} with compression`);
            return true;
          }
        } catch (e) { }
          
        // Cleanup and retry once
        if (retryCount === 0) {
          console.log('🧹 Attempting to free up storage space...');
          await this.cleanupOldData();
          return this.safeSetItem(key, value, retryCount + 1);
        }
        
        // If all else fails (quota or ANY other error), use fallback
        if (retryCount < maxRetries) {
          console.log('💾 Error encountered, attempting fallback storage...');
          return await this.fallbackSetItem(key, value);
        }
        
        throw error;
      }
    },

    safeRemoveItem(key) {
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return;
      }
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing from localStorage (key: ${key}):`, error);
      }
    },

    // Method to validate and fix video data integrity
    async validateAndFixVideoData() {
      console.log('🔧 === VALIDATING AND FIXING VIDEO DATA ===');  
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        console.error('localStorage not available for validation');
        return false;
      }
      
      let fixesApplied = 0;
      
      this.importData.forEach((post, postIndex) => {
        if (post.media && post.media.length > 0) {
          post.media.forEach((media, mediaIndex) => {
            if (media.type && media.type.startsWith('video/')) {
              if (!media.url && media.preview) {
                console.log(`🔧 Fixing video URL for ${media.name} in post ${post.id}`);
                media.url = media.preview;
                fixesApplied++;
              } else if (!media.preview && media.url) {
                console.log(`🔧 Fixing video preview for ${media.name} in post ${post.id}`);
                media.preview = media.url;
                fixesApplied++;
              }
            }
          });
        }
      });
      
      if (fixesApplied > 0) {
        console.log(`🔧 Applied ${fixesApplied} fixes to video data. Saving to localStorage...`);
        try {
          await this.saveUserPostsToStorage();
        } catch (error) {
          console.error('Failed to save after video data fixes:', error);
        }
        return true;
      } else {
        console.log('🔧 No video data fixes needed');
        return false;
      }
    },

    // Debug method to check localStorage image data
    async debugImageStorage() {
      console.log('📷 === IMAGE STORAGE DEBUG ===');
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        console.error('localStorage not available for debug');
        return;
      }

      const savedPosts = await this.safeGetItem('userPosts');
      if (savedPosts) {
        try {
          const posts = JSON.parse(savedPosts);
          const imagePosts = posts.filter(post =>
            post.media && post.media.some(m => m.type.startsWith('image/'))
          );

          console.log(`Found ${imagePosts.length} posts with images in localStorage`);
          imagePosts.forEach((post, index) => {
            const images = post.media.filter(m => m.type.startsWith('image/'));
            console.log(`Image Post ${index + 1} (ID: ${post.id}):`);
            console.log(`  Description: ${post.description?.substring(0, 50)}...`);
            console.log(`  Images: ${images.length}`);

            images.forEach((image, iIndex) => {
              console.log(`Image ${iIndex + 1}:`);
              console.log(`Name: ${image.name}`);
              console.log(`Type: ${image.type}`);
              console.log(`Size: ${image.size} bytes`);
              console.log(`Has URL: ${!!image.url}`);
              console.log(`URL Type: ${image.url?.startsWith('data:') ? 'Data URL (base64)' : 'Other'}`);
              console.log(`URL Length: ${image.url?.length || 0} characters`);
            });
          });

          return imagePosts;
        } catch (error) {
          console.error('Error parsing localStorage data:', error);
        }
      } else {
        console.log('No posts found in localStorage');
      }
      console.log('📷 === END IMAGE STORAGE DEBUG ===');
    },

    // Method to validate and fix image data integrity
    async validateAndFixImageData() {
      console.log('🔧 === VALIDATING AND FIXING IMAGE DATA ===');  
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        console.error('localStorage not available for validation');
        return false;
      }
      
      let fixesApplied = 0;
      
      this.importData.forEach((post, postIndex) => {
        if (post.media && post.media.length > 0) {
          post.media.forEach((media, mediaIndex) => {
            if (media.type && media.type.startsWith('image/')) {
              if (!media.url && media.preview) {
                console.log(`🔧 Fixing image URL for ${media.name} in post ${post.id}`);
                media.url = media.preview;
                fixesApplied++;
              } else if (!media.preview && media.url) {
                console.log(`🔧 Fixing image preview for ${media.name} in post ${post.id}`);
                media.preview = media.url;
                fixesApplied++;
              }
            }
          });
        }
      });
      
      if (fixesApplied > 0) {
        console.log(`🔧 Applied ${fixesApplied} fixes to image data. Saving to localStorage...`);
        try {
          await this.saveUserPostsToStorage();
        } catch (error) {
          console.error('Failed to save after image data fixes:', error);
        }
        return true;
      } else {
        console.log('🔧 No image data fixes needed');
        return false;
      }
    },

    // Comprehensive storage debugging method
    async debugStorageIssue() {
      console.log('🔍 === COMPREHENSIVE STORAGE DEBUG ===');
      
      // 1. Check localStorage availability
      const health = this.checkStorageHealth();
      console.log('1. Storage Health:', health);
      // 2. Check current data
      console.log('2. Current importData:', {
        totalPosts: this.importData.length,
        postsWithMedia: this.importData.filter(p => p.media && p.media.length > 0).length,
        selectedMediaItems: this.selectedMedia.length
      });
      
      // 3. Check selectedMedia details
      if (this.selectedMedia.length > 0) {
        console.log('3. Selected Media Details:');
        this.selectedMedia.forEach((media, index) => {
          console.log(`   Media ${index + 1}:`, {
            name: media.name,
            type: media.type,
            size: media.size,
            processing: media.processing,
            hasUrl: !!media.url,
            hasPreview: !!media.preview,
            urlLength: media.url ? media.url.length : 0,
            isValidDataUrl: media.url ? media.url.startsWith('data:') : false
          });
        });
      }
      
      // 4. Test localStorage write capability
      console.log('4. Testing localStorage write capability...');
      try {
        const testData = { test: 'data', timestamp: Date.now() };
        const testString = JSON.stringify(testData);
        localStorage.setItem('__debug_test__', testString);
        const retrieved = localStorage.getItem('__debug_test__');
        localStorage.removeItem('__debug_test__');
        
        if (retrieved === testString) {
          console.log('✅ localStorage write/read test passed');
        } else {
          console.error('❌ localStorage write/read test failed');
        }
      } catch (error) {
        console.error('❌ localStorage test error:', error);
      }
      
      // 5. Check existing saved posts
      const savedPosts = await this.safeGetItem('userPosts');
      if (savedPosts) {
        try {
          const parsed = JSON.parse(savedPosts);
          console.log('5. Existing saved posts:', {
            count: parsed.length,
            totalSize: savedPosts.length,
            sizeMB: (savedPosts.length / 1024 / 1024).toFixed(2)
          });
        } catch (error) {
          console.error('❌ Error parsing saved posts:', error);
        }
      } else {
        console.log('5. No existing saved posts found');
      }
      
      // 6. Simulate save process
      console.log('6. Simulating save process...');
      try {
        const userPosts = this.importData.filter(post => post.id);
        const dataToSave = JSON.stringify(userPosts);
        console.log('   Data to save:', {
          posts: userPosts.length,
          characters: dataToSave.length,
          sizeMB: (dataToSave.length / 1024 / 1024).toFixed(2)
        });
        
        // Check if data would exceed typical localStorage limits
        if (dataToSave.length > 5 * 1024 * 1024) {
          console.warn('⚠️ Data size exceeds typical 5MB localStorage limit');
        }
        
        // Test actual save (without committing)
        const testKey = '__save_test__';
        localStorage.setItem(testKey, dataToSave);
        localStorage.removeItem(testKey);
        console.log('✅ Save simulation successful');
        
      } catch (error) {
        console.error('❌ Save simulation failed:', error);
      }
      console.log('🔍 === END COMPREHENSIVE DEBUG ===');
      
      // Return summary
      return {
        storageHealth: health,
        currentPosts: this.importData.length,
        selectedMedia: this.selectedMedia.length,
        canSave: health.available
      };
    },

    // Data compression methods
    compressData(data) {
      try {
        const compressed = btoa(unescape(encodeURIComponent(data)));
        return compressed;
      } catch (error) {
        console.error('Compression failed:', error);
        return data;
      }
    },

    decompressData(compressedData) {
      try {
        const decompressed = decodeURIComponent(escape(atob(compressedData)));
        return decompressed;
      } catch (error) {
        console.error('Decompression failed:', error);
        return compressedData;
      }
    },

    // Fallback storage using IndexedDB
    async fallbackSetItem(key, value) {
      try {
        if (!window.indexedDB) {
          throw new Error('IndexedDB not available');
        }

        return new Promise((resolve, reject) => {
          const request = indexedDB.open('LinkedInCloneStorage', 1);
          
          request.onerror = () => reject(request.error);
          
          request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('posts')) {
              db.createObjectStore('posts', { keyPath: 'key' });
            }
          };
          
          request.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction(['posts'], 'readwrite');
            const store = transaction.objectStore('posts');
            
            store.put({ key, value, timestamp: Date.now() });
            
            transaction.oncomplete = () => {
              console.log(`✅ Successfully saved ${key} to IndexedDB fallback storage`);
              resolve(true);
            };
            transaction.onerror = () => reject(transaction.error);
          };
        });
      } catch (error) {
        console.error('Fallback storage failed:', error);
        throw error;
      }
    },

    async fallbackGetItem(key) {
      try {
        if (!window.indexedDB) {
          return null;
        }

        return new Promise((resolve, reject) => {
          const request = indexedDB.open('LinkedInCloneStorage', 2);
          
          request.onerror = () => resolve(null);
          
          request.onsuccess = (event) => {
            const db = event.target.result; 
            if (!db.objectStoreNames.contains('posts')) {
              resolve(null);
              return;
            }
            
            const transaction = db.transaction(['posts'], 'readonly');
            const store = transaction.objectStore('posts');
            const getRequest = store.get(key);
            
            getRequest.onsuccess = () => {
              const result = getRequest.result;
              resolve(result ? result.value : null);
            };   
            getRequest.onerror = () => resolve(null);
          };
        });
      } catch (error) {
        console.error('Fallback retrieval failed:', error);
        return null;
      }
    },

    // Clean up old data to free storage space
    async cleanupOldData() {
      try {
        console.log('🧹 Starting storage cleanup...');
        
        // Remove old temporary data
        const keysToCheck = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && (key.startsWith('temp_') || key.startsWith('cache_'))) {
            keysToCheck.push(key);
          }
        }
        
        keysToCheck.forEach(key => {
          try {
            localStorage.removeItem(key);
            console.log(`🗑️ Removed temporary data: ${key}`);
          } catch (error) {
            console.warn(`Failed to remove ${key}:`, error);
          }
        });

        // Compress existing posts if they're taking too much space
        const existingPosts = await this.safeGetItem('userPosts');
        if (existingPosts && existingPosts.length > 1024 * 1024) { // > 1MB
          try {
            const compressed = this.compressData(existingPosts);
            if (compressed.length < existingPosts.length * 0.8) {
              localStorage.setItem('userPosts', 'COMPRESSED:' + compressed);
              console.log(`🗜️ Compressed existing posts: ${this.formatFileSize(existingPosts.length)} → ${this.formatFileSize(compressed.length + 11)}`);
            }
          } catch (compressionError) {
            console.warn('Failed to compress existing posts:', compressionError);
          }
        }
        console.log('✅ Storage cleanup completed');
      } catch (error) {
        console.error('Storage cleanup failed:', error);
      }
    },

    // Enhanced data validation
    validatePostData(post) {
      const errors = [];
      
      if (!post.id) errors.push('Missing post ID');
      if (!post.name) errors.push('Missing post name');
      if (!post.description) errors.push('Missing post description');
      
      if (post.media && Array.isArray(post.media)) {
        post.media.forEach((media, index) => {
          if (!media.type) errors.push(`Media ${index}: Missing type`);
          if (!media.name) errors.push(`Media ${index}: Missing name`);
          if (!media.url && !media.preview) errors.push(`Media ${index}: Missing URL and preview`);
          
          // Validate data URLs
          if (media.url && media.url.startsWith('data:')) {
            if (media.type.startsWith('video/') && !media.url.startsWith('data:video/')) {
              errors.push(`Media ${index}: Video type mismatch`);
            }
            if (media.type.startsWith('image/') && !media.url.startsWith('data:image/')) {
              errors.push(`Media ${index}: Image type mismatch`);
            }
          }
        });
      }    
      return errors;
    },

    // Format file size for display
    formatFileSize(bytes) {
      if (bytes === 0) return '0 B';
      const k = 1024;
      const sizes = ['B', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
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
$color-gray-600: #555;
$color-gray-700: #333;
$color-gray-900: #000;
$color-green: #057642;
$color-orange: #e7a33e;
$color-red: #cc1016;

* {
  font-family: $font-family-primary;
}

// Post Modal Styles
.post-input-container {
  position: relative;
  flex: 1;
  width: 100%;
  max-width: 100%;
  margin-left: 5px;
  box-sizing: border-box;
}

.post-modal {
  position: fixed;
  top: 40%;
  left: 49.5%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 90%;
  max-width: 560px;
  max-height: 80vh;
  overflow-y: auto;
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
}

.modal-header {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid $color-gray-300;

  .modal-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 12px;
  }

  .user-info {
    flex: 1;
    .user-name {
      font-size: $font-size-base;
      font-weight: $font-weight-semibold;
      color: $color-gray-900;
    }
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: $color-gray-500;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s ease;
    &:hover {
      background: $color-gray-100;
      color: $color-gray-700;
    }
  }
}

.textarea-container {
  position: relative;
  &.drag-over {
    .post-textarea {
      opacity: 0.5;
    }
  }
}

.post-textarea {
  width: 100%;
  border: none;
  outline: none;
  padding: 20px;
  font-size: 18px;
  font-family: inherit;
  resize: none;
  min-height: 120px;
  color: $color-gray-900;
  &::placeholder {
    color: $color-gray-500;
  }
}

.drag-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 102, 194, 0.1);
  border: 2px dashed $color-primary;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  .drag-message {
    text-align: center;
    color: $color-primary;
    svg {
      margin-bottom: 8px;
    }
    p {
      margin: 0;
      font-size: $font-size-lg;
      font-weight: $font-weight-semibold;
    }
  }
}

// Media Preview Styles
.media-preview-container {
  padding: 0 20px;
  max-height: 300px;
  overflow-y: auto;
  border-bottom: 1px solid $color-gray-300;
}

.media-preview-item {
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
}

.media-preview-wrapper {
  position: relative;
  border: 1px solid $color-gray-300;
  border-radius: 8px;
  overflow: hidden;

  .remove-media-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
    z-index: 10;
    &:hover {
      background: rgba(204, 16, 22, 0.9);
      transform: scale(1.1);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    &:active {
      transform: scale(0.95);
    }
  }
}

.media-preview-img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  display: block;
}

.video-preview-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.media-preview-video {
  width: 100%;
  max-height: 200px;
  display: block;
}

.media-remove-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
  z-index: 10;

  &:hover {
    background: rgba(204, 16, 22, 0.9);
    transform: scale(1.1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: scale(0.95);
  }
  svg {
    pointer-events: none;
  }
}

.media-preview-file {
  display: flex;
  align-items: center;
  padding: 16px;
  background: $color-gray-100;

  svg {
    color: $color-gray-500;
    margin-right: 12px;
  }
  .file-name {
    font-size: $font-size-sm;
    color: $color-gray-700;
    font-weight: $font-weight-medium;
  }
}

// Modal Actions
.modal-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-top: 1px solid $color-gray-300;
}

.media-buttons {
  display: flex;
  gap: 12px;
}

.media-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  color: $color-gray-600;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  transition: all 0.2s ease;

  &:hover {
    background: $color-gray-100;
    color: $color-gray-900;
  }
 svg {
    color: $color-primary;
  }
}

.post-btn {
  background: $color-gray-300;
  color: $color-gray-500;
  border: none;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  cursor: not-allowed;
  transition: all 0.2s ease;

  &.active {
    background: $color-primary;
    color: white;
    cursor: pointer;
   &:hover {
      background: #084d8a;
    }
  }
}

// Post Media Display Styles
.post-media-container {
  margin: 12px 0;
}
.post-media-item {
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
}

.video-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.pro-height-video {
  width: 100%;
  max-height: 400px;
  border-radius: 8px;
  display: block;
}

.video-delete-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
  z-index: 10;

  &:hover {
    background: rgba(204, 16, 22, 0.9);
    transform: scale(1.1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: scale(0.95);
  }
  svg {
    pointer-events: none;
  }
}

.post-file-item {
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid $color-gray-300;
  border-radius: 8px;
  background: $color-gray-100;

  .file-icon-container {
    margin-right: 12px;
    svg {
      color: $color-gray-500;
    }
  }

  .file-info {
    flex: 1;
    .file-name {
      display: block;
      font-size: $font-size-sm;
      font-weight: $font-weight-medium;
      color: $color-gray-900;
      margin-bottom: 2px;
    }
    .file-size {
      font-size: $font-size-xs;
      color: $color-gray-500;
    }
  }

  .download-btn {
    padding: 8px;
    border-radius: 50%;
    background: transparent;
    border: 1px solid $color-gray-300;
    color: $color-gray-600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.2s ease;
    &:hover {
      background: $color-primary;
      border-color: $color-primary;
      color: white;
    }
  }
}

.main-wrapper {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.middle-container {
  background: white !important;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.middle {
  border: 1px solid $color-gray-300;
  border-radius: 8px;
  background: white;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.section {
  display: flex;
  align-items: center;
  padding: 16px;

  input {
    flex: 1;
    width: 100%;
    max-width: 96%;
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
    box-sizing: border-box;

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
  height: 36px;
  width: 36px;
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
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.post-body {
  margin-top: 12px;
  padding: 16px;
  border-radius: 8px;
  background: white;
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
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

.post-actions {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 4px;
}

.post-profile-img {
  cursor: pointer;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  object-fit: cover;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border-color: rgba(10, 102, 194, 0.3);
  }
}

.delete-icon {
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
    background: rgba(204, 16, 22, 0.1);
    color: $color-red;
    transform: scale(1.1);
  }
  svg {
    width: 18px;
    height: 18px;
  }
}

.post-menu {
  position: relative;
}

.menu-dots {
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
    color: $color-gray-700;
    transform: scale(1.1);
  }
  svg {
    width: 18px;
    height: 18px;
  }
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid $color-gray-300;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  min-width: 120px;
  padding: 4px 0;
}

.dropdown-item {
  width: 100%;
  padding: 8px 16px;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: $font-size-sm;
  color: $color-gray-700;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: $color-gray-100;
    color: $color-gray-900;
  }
  &.delete {
    color: $color-red;
    &:hover {
      background: rgba(204, 16, 22, 0.1);
      color: $color-red;
    }
  }
  svg {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
}

.edit-mode {
  margin-top: 8px;
}

.edit-textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid $color-gray-300;
  border-radius: 8px;
  font-size: $font-size-sm;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  outline: none;
  transition: all 0.2s ease;
  &:focus {
    border-color: $color-primary;
    box-shadow: 0 0 0 2px rgba(10, 102, 194, 0.1);
  }
}

.edit-actions {
  display: flex;
  gap: 8px;
  margin-top: 8px;
  justify-content: flex-end;
}

.save-btn,
.cancel-btn {
  padding: 6px 16px;
  border: none;
  border-radius: 20px;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  cursor: pointer;
  transition: all 0.2s ease;
}

.save-btn {
  background: $color-primary;
  color: white;
  &:hover {
    background: #084d8a;
    transform: translateY(-1px);
  }
}

.cancel-btn {
  background: transparent;
  color: $color-gray-700;
  border: 1px solid $color-gray-300;
  &:hover {
    background: $color-gray-100;
    border-color: $color-gray-500;
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
  font-size: 16px;
  font-weight: $font-weight-normal;
  color: $color-gray-700;
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

// Post Modal Responsive Styles
@media (max-width: 768px) {
  .post-modal {
    width: 95%;
    max-width: 95%;
    top: 20px;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    height: auto;
    max-height: calc(100vh - 40px);
  }

  .modal-header {
    padding: 16px;
    .modal-avatar {
      width: 40px;
      height: 40px;
    }
    .user-name {
      font-size: $font-size-sm;
    }
  }

  .post-textarea {
    padding: 16px;
    font-size: 16px;
    min-height: 100px;
  }

  .media-preview-container {
    padding: 0 16px;
  }

  .modal-actions {
    padding: 12px 16px;
    flex-direction: column;
    gap: 12px;
    .media-buttons {
      width: 100%;
      justify-content: space-around;
    }
    .post-btn {
      width: 100%;
    }
  }
}

@media (max-width: 480px) {
  .post-modal {
    width: 98%;
    top: 10px;
    bottom: 10px;
    max-height: calc(100vh - 20px);
  }
  .media-btn {
    padding: 6px 8px;
    font-size: 0.8rem;
    span {
      display: none;
    }
  }
}

// Enhanced Responsive Styles
@media (max-width: 768px) {
  .main-wrapper {
    width: 100% !important;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  .middle-container {
    width: 97% !important;
    max-width: 97% !important;
    margin: 0 auto;
    overflow-x: hidden;
    padding: 0;
    box-sizing: border-box;
    margin-top: 1.5rem !important;
  }

  .middle {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box;
    margin: 0;
  }

  .section {
    flex-direction: column;
    padding: 14px;
    width: 100%;
    box-sizing: border-box;
    align-items: center;

    input {
      width: 100% !important;
      max-width: 100% !important;
      margin: 12px 0 0 0;
      margin-left: 0 !important;
      box-sizing: border-box;
      font-size: 16px;
      padding: 14px 18px;
      text-align: center;
      flex: none;
    }
  }

  .midle-img {
    height: 44px;
    width: 44px;
  }

  .middle-body {
    flex-direction: column;
    gap: 8px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 8px 12px;
  }

  .middle-section {
    justify-content: center;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    .span {
      font-size: 0.9rem;
      margin-left: 6px;
    }
  }

  .items-flex {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .post-container {
    width: 97% !important;
    max-width: 97% !important;
    margin: 16px auto 0;
    padding: 0;
    box-sizing: border-box;
  }

  .post-body {
    width: 100% !important;
    max-width: 100% !important;
    padding: 16px;
    box-sizing: border-box;
    overflow-x: hidden;
    margin-bottom: 12px;
  }

  .post-section {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 12px;
  }

  .pro-img-title .midle-img {
    height: 44px;
    width: 44px;
  }

  .align {
    padding-right: 35px;
  }

  .post-header {
    font-size: 0.9rem;
  }

  .id {
    font-size: 0.75rem;
  }

  .post-react {
    padding: 8px 6px;
    min-width: 0;
    flex: 1;
    margin: 0 2px;
    .span {
      font-size: 0.8rem;
      margin-left: 6px;
    }
  }

  .pro-height-img {
    height: 280px !important;
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box;
  }

  .pro-height-video {
    height: 280px !important;
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box;
  }

  .video-delete-btn {
    width: 36px;
    height: 36px;
    top: 12px;
    right: 12px;
    background: rgba(0, 0, 0, 0.8);
  }

  .post-dec {
    font-size: $font-size-sm;
    width: 100%;
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 1.4;
  }

  .flex-container {
    width: 100% !important;
    box-sizing: border-box;
    flex-wrap: nowrap;
    gap: 0;
  }

  .post-actions {
    right: 8px;
    top: 8px;
    gap: 2px;
  }

  .delete-icon,
  .menu-dots {
    padding: 5px;
  }

  .delete-icon svg,
  .menu-dots svg {
    width: 16px;
    height: 16px;
  }

  .dropdown-menu {
    right: 0;
    min-width: 110px;
  }

  .post-profile-img {
    height: 44px;
    width: 44px;
  }

  .edit-textarea {
    font-size: 0.9rem;
    min-height: 70px;
  }

  .save-btn,
  .cancel-btn {
    padding: 5px 12px;
    font-size: 0.8rem;
  }
}

// Enhanced fixes for small mobile screens
@media (max-width: 480px) {
  .main-wrapper {
    width: 100% !important;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .middle-container {
    width: 97% !important;
    max-width: 97% !important;
    margin: 0 auto;
    padding: 0;
    position: relative;
    left: 0;
    right: 0;
  }

  .section {
    padding: 12px;
    input {
      font-size: 15px;
      padding: 12px 16px;
      text-align: center;
    }
  }

  .midle-img {
    height: 40px;
    width: 40px;
  }

  .middle-section {
    padding: 8px 16px;
    .span {
      font-size: 0.85rem;
    }
  }

  .post-container {
    width: 97% !important;
    max-width: 97% !important;
    margin: 14px auto 0;
    padding: 0;
    position: relative;
    left: 0;
    right: 0;
  }

  .post-body {
    padding: 14px;
  }

  .pro-img-title .midle-img {
    height: 40px;
    width: 40px;
  }

  .align {
    padding-right: 30px;
  }

  .post-header {
    font-size: 0.85rem;
  }

  .id {
    font-size: 0.7rem;
  }

  .post-dec {
    font-size: 0.85rem;
  }

  .pro-height-img {
    height: 250px !important;
  }

  .pro-height-video {
    height: 250px !important;
  }

  .post-react {
    padding: 6px 4px;
    .span {
      font-size: 0.75rem;
      margin-left: 4px;
    }
  }

  .post-actions {
    right: 6px;
    top: 6px;
    gap: 1px;
  }

  .delete-icon,
  .menu-dots {
    padding: 4px;
  }

  .delete-icon svg,
  .menu-dots svg {
    width: 15px;
    height: 15px;
  }

  .dropdown-menu {
    min-width: 100px;
  }

  .post-profile-img {
    height: 40px;
    width: 40px;
  }

  .dropdown-item {
    padding: 6px 12px;
    font-size: 0.75rem;
  }

  .edit-textarea {
    font-size: 0.85rem;
    min-height: 60px;
    padding: 10px;
  }

  .save-btn,
  .cancel-btn {
    padding: 4px 10px;
    font-size: 0.75rem;
  }
}

@media (max-width: 414px) {
  .middle-container {
    width: 97% !important;
    max-width: 97% !important;
  }
  .post-container {
    width: 97% !important;
    max-width: 97% !important;
  }
  .section {
    padding: 10px;
  }
  .post-body {
    padding: 12px;
  }
}

@media (max-width: 375px) {
  .middle-container {
    width: 97% !important;
    max-width: 97% !important;
  }

  .post-container {
    width: 97% !important;
    max-width: 97% !important;
  }

  .section {
    padding: 8px;
    input {
      font-size: 14px;
      padding: 10px 14px;
      text-align: center;
    }
  }

  .midle-img {
    height: 36px;
    width: 36px;
  }

  .middle-section {
    padding: 6px 12px;
    .span {
      font-size: 0.8rem;
    }
  }

  .post-body {
    padding: 10px;
  }

  .pro-img-title .post-profile-img {
    height: 36px;
    width: 36px;
  }

  .align {
    padding-right: 28px;
  }

  .post-header {
    font-size: 0.8rem;
  }

  .id {
    font-size: 0.65rem;
  }

  .post-dec {
    font-size: 0.8rem;
  }

  .pro-height-img {
    height: 220px !important;
  }

  .pro-height-video {
    height: 220px !important;
  }

  .post-react {
    padding: 5px 3px;
    .span {
      font-size: 0.7rem;
      margin-left: 3px;
    }
  }
}
</style>