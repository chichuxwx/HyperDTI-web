<template>
  <div class="image-card" @click="navigateTo">
    <img :src="imageSrc" alt="Image" class="centered-image">
    <div class="image-text">
      <h2 :class="titleClass" :style="titleStyle">{{ title }}</h2>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    titleClass: {
      type: String,
      default: ''
    },
    titleStyle: {
      type: Object,
      default: () => ({})
    }
  },

}
</script>

<style scoped>
.image-card {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  margin: 1px;
  max-width: 500px;
  margin: 0 auto;
}

.centered-image {
  max-width: 45%;
  height: auto;
  margin-right: 20px;
  transition: transform 0.3s ease-in-out; /* 添加过渡效果 */
}

.centered-image:hover {
  transform: scale(1.1); /* 悬浮时放大 */
}

.card-title {
  font-size: 16px; /* 默认字体大小 */
  transition: color 0.3s ease-in-out; /* 添加过渡效果 */
}

.image-text {
  flex: 1;
}

.image-card:hover {
  color: #a9a9a9; /* 设置标题悬停时的颜色 */
}

.description {
  width: 100%;
  height: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

</style>
