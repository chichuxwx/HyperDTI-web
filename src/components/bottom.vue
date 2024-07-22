<template>
  <button class="scroll-to-top" @click="scrollToTop">
        <span class="triangle-up"></span>
      </button>
  <footer class="footer">
    <div class="boxer">

    </div>
    <div class="buttons">
      <a href="https://github.com/zhaoqichang/HpyerAttentionDTI">Github</a>
    </div>
    <div class="listcontainer">
      <div class="text">
        <p>Copyright © 2024 CSU xxxxx Group. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
  methods:{
  scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
}
}
</script>

<style scoped>
.buttons{
  margin-top: -20px;
  margin-left: 20px;
}
.buttons a{
  color:white;
  font-size: 16px;
  font-weight: bolder;
  text-decoration: none;
}

.buttons a:visited {
  color: white;
}

.buttons a:hover{
  text-decoration: underline;
}

.footer {
  background-color: rgb(43, 43, 45);
  width: 1680px;
  padding: 30px 0;
  position: relative;
  margin-bottom: -10px;
}

.listcontainer {
  max-width: 1200px; /* 设置最大宽度 */
  margin:0 auto; /* 居中显示 */
}

.text {
  width: 100%;
  max-width: 600px; /* 设置文字容器的最大宽度 */
  margin: 0 auto; /* 居中显示 */
}

.text p {
  font-size: 15px;
  text-align: center; /* 文字左对齐 */
  color: #f1f1f1;
  line-height: 2;
  margin: 0 auto;
  padding: 5px;
}

.text a {
  font-size: 15px;
  font-weight: normal;
  text-align: left; /* 文字左对齐 */
  color: #f1f1f1;
  margin: 0;
  display: block;
  text-decoration: none;
}

.text a:hover {
  color: #dcdcdc;
}

.scroll-to-top {
  position: fixed;
  bottom: 150px;
  right: 100px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(14, 51, 47);
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
  z-index: 3;
}

.scroll-to-top:hover {
  background-color: #444;
}

.scroll-to-top .triangle-up {
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
}
</style>
