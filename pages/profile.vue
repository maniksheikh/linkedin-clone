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
              <img 
                :src="user && user.photoURL ? user.photoURL : '/img/profile-img.jpg'" 
                alt="Profile Picture" 
                class="profile-avatar"
                @error="handleImageError"
              />
            </div>
            <div class="user-details">
              <h1>{{ user ? user.displayName : 'Guest User' }}</h1>
              <p class="title">{{ user ? user.email : 'Please sign in' }}</p>
              <p class="location">Bogra District, Rajshahi</p>
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
              Passionate developer interested in creating innovative solutions and connecting with like-minded professionals.
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
  computed: {
    ...mapState(['user'])
  },
  methods: {
    handleImageError(event) {
      event.target.src = '/img/placeholder.svg';
    }
  }
};
</script>

<style lang="scss" scoped>
$primary-blue: #0a66c2;
$text-primary: #000000e6;
$text-secondary: #666666;
$text-muted: #8b8888;
$background-white: #ffffff;
$background-light: #f3f2ef;
$border-color: #d9d9d9;
$border-radius: 8px;
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
  
  h1 {
    font-size: 28px;
    font-weight: 600;
    color: $text-primary;
    margin: 0 0 $spacing-sm 0;
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
    
    h1 {
      font-size: 24px;
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
    
    h1 {
      font-size: 20px;
    }
  }
  
  .profile-info,
  .profile-sections {
    padding: $spacing-sm;
  }
}
</style>
