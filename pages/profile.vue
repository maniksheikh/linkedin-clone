<template>
  <div class="profile-page">
    <AppHeader />
    <div class="main-content">
      <div class="profile-container">
        <div class="profile-header">
          <div class="cover-photo">
            <img src="/img/banner-img.jpg" alt="Cover Photo" @error="handleImageError" />
          </div>
          <div class="profile-info">
            <div class="avatar-section">
              <img :src="getUserProfileImage(user)" alt="Profile Picture" class="profile-avatar"
                @error="handleImageError" />
            </div>
            <div class="user-details">
              <div class="name-section">
                <h1 v-if="!isEditingName">{{ user ? user.displayName : 'Guest User' }}</h1>
                <div v-else class="edit-name-form">
                  <input v-model="editName" type="text" class="name-input" placeholder="Enter your full name"
                    @keyup.enter="saveNameEdit" />
                  <div class="edit-buttons">
                    <button @click="saveNameEdit" class="save-btn">Save</button>
                    <button @click="cancelNameEdit" class="cancel-btn">Cancel</button>
                  </div>
                </div>
                <button v-if="!isEditingName && user" @click="startNameEdit" class="edit-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                      fill="currentColor" />
                  </svg>
                </button>
              </div>
              <p class="title">{{ user ? user.email : 'Please sign in' }}</p>
              <p class="location">Software Developer</p>
              <div class="connections">
                <span>39 connections</span>
              </div>
            </div>
          </div>
        </div>
        <div class="profile-sections">
          <div class="about-section">
            <h2>About</h2>
            <p>
              Passionate developer interested in creating innovative solutions and connecting with like-minded
              professionals.
              Always eager to learn new technologies and contribute to meaningful projects.
            </p>
          </div>
          <div class="experience-section">
            <h2>Experience</h2>
            <div class="experience-item">
              <div class="company-logo">
                <img src="/img/studio.jpg" alt="Company Logo" @error="handleImageError" />
              </div>
              <div class="experience-details">
                <h3>Software Developer</h3>
                <h4>CONNEKT STUDIO</h4>
                <p class="duration">2022 - Present</p>
                <p class="description">
                  Working on web development projects using modern technologies.
                  Collaborating with teams to deliver high-quality software solutions.
                </p>
              </div>
            </div>
          </div>
          <div class="skills-section">
            <h2>Skills</h2>
            <div class="skills-grid">
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">Nuxt.js</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">Firebase</span>
              <span class="skill-tag">SCSS</span>
              <span class="skill-tag">Node.js</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppHeader from '~/components/AppHeader.vue';

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      isEditingName: false,
      editName: ''
    }
  },
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
    },
    startNameEdit() {
      this.isEditingName = true
      this.editName = this.user ? this.user.displayName : ''
    },
    cancelNameEdit() {
      this.isEditingName = false
      this.editName = ''
    },
    async saveNameEdit() {
      if (this.editName.trim()) {
        try {
          await this.$store.dispatch('updateUserProfile', {
            displayName: this.editName.trim()
          })
          this.isEditingName = false
          this.editName = ''
        } catch (error) {
          console.error('Error updating profile:', error)
          alert('Failed to update name. Please try again.')
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// Define SCSS variables
$primary-blue: #0a66c2;
$background-white: #ffffff;
$background-light: #f3f2ef;
$background-gray: #f8f9fa;
$text-primary: #000000;
$text-secondary: #666666;
$text-muted: #8b8888;
$border-color: #d9d9d9;
$border-radius: 8px;
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;

.profile-page {
  min-height: 100vh;
  background: $background-light;
  padding-top: 80px;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: $spacing-lg;
}

.profile-container {
  background: $background-white;
  border-radius: $border-radius;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.profile-header {
  position: relative;
}

.cover-photo {
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.profile-info {
  padding: $spacing-lg;
  position: relative;
}

.avatar-section {
  position: absolute;
  top: -60px;
  left: $spacing-lg;

  .profile-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid $background-white;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
}

.user-details {
  margin-top: 60px;

  .name-section {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    margin-bottom: $spacing-sm;

    h1 {
      font-size: 28px;
      font-weight: 600;
      color: $text-primary;
      margin: 0;
    }

    .edit-btn {
      background: none;
      border: none;
      color: $text-secondary;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      transition: all 0.2s ease;

      &:hover {
        color: $primary-blue;
        background: rgba(10, 102, 194, 0.1);
      }
    }

    .edit-name-form {
      display: flex;
      flex-direction: column;
      gap: $spacing-sm;
      flex: 1;

      .name-input {
        font-size: 28px;
        font-weight: 600;
        color: $text-primary;
        border: 2px solid $primary-blue;
        border-radius: 4px;
        padding: 8px 12px;
        outline: none;
        background: $background-white;

        &:focus {
          border-color: $primary-blue;
          box-shadow: 0 0 0 2px rgba(10, 102, 194, 0.1);
        }
      }

      .edit-buttons {
        display: flex;
        gap: $spacing-sm;

        button {
          padding: 6px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .save-btn {
          background: $primary-blue;
          color: white;

          &:hover {
            background: #085a9c;
          }
        }

        .cancel-btn {
          background: $background-light;
          color: $text-secondary;
          border: 1px solid $border-color;
             &:hover {
             background: $background-gray;
             }
        }
      }
    }
  }

  .title {
    font-size: 16px;
    color: $text-secondary;
    margin: 0 0 $spacing-sm 0;
  }

  .location {
    font-size: 14px;
    color: $text-muted;
    margin: 0 0 $spacing-md 0;
  }

  .connections {
    span {
      color: $primary-blue;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
        &:hover {
        text-decoration: underline;
        }
    }
  }
}

.profile-sections {
  padding: $spacing-lg;
  border-top: 1px solid $border-color;
}

.about-section,
.experience-section,
.skills-section {
  margin-bottom: $spacing-xl;

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: $text-primary;
    margin: 0 0 $spacing-md 0;
  }

  p {
    color: $text-secondary;
    line-height: 1.6;
    margin: 0;
  }
}

.experience-item {
  display: flex;
  gap: $spacing-md;

  .company-logo {
    flex-shrink: 0;

    img {
      width: 48px;
      height: 48px;
      border-radius: 4px;
      object-fit: cover;
    }
  }

  .experience-details {
    flex: 1;

    h3 {
      font-size: 16px;
      font-weight: 600;
      color: $text-primary;
      margin: 0 0 4px 0;
    }

    h4 {
      font-size: 14px;
      font-weight: 500;
      color: $text-secondary;
      margin: 0 0 4px 0;
    }
    .duration {
      font-size: 12px;
      color: $text-muted;
      margin: 0 0 $spacing-sm 0;
    }
    .description {
      font-size: 14px;
      color: $text-secondary;
      line-height: 1.5;
      margin: 0;
    }
  }
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-sm;
}

.skill-tag {
  background: $background-light;
  color: $text-primary;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid $border-color;
}

@media screen and (max-width: 768px) {
  .main-content {
    padding: $spacing-md;
  }
  .cover-photo {
    height: 150px;
  }

  .avatar-section {
    top: -40px;
    .profile-avatar {
      width: 80px;
      height: 80px;
    }
  }

  .user-details {
    margin-top: 40px;

    .name-section {
      flex-direction: column;
      align-items: flex-start;
      gap: $spacing-sm;
      h1 {
        font-size: 24px;
      }
      .edit-name-form .name-input {
        font-size: 24px;
      }
    }
  }

  .profile-info,
  .profile-sections {
    padding: $spacing-md;
  }

  .experience-item {
    flex-direction: column;
    gap: $spacing-sm;
  }
}

@media screen and (max-width: 480px) {
  .main-content {
    padding: $spacing-sm;
  }

  .cover-photo {
    height: 120px;
  }

  .avatar-section {
    top: -30px;
    left: $spacing-md;
    .profile-avatar {
      width: 60px;
      height: 60px;
    }
  }

  .user-details {
    margin-top: 30px;

    .name-section {
      h1 {
        font-size: 20px;
      }
      .edit-name-form .name-input {
        font-size: 20px;
      }
    }
  }

  .profile-info,
  .profile-sections {
    padding: $spacing-sm;
  }
}
</style>
