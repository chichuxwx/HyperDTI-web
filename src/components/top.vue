<template>
  <div>
    <div class="navcolumn">
      <nav>
        <div class="logo">
          <router-link to="/" class="ad-logo">HyperDTI</router-link>
        </div>
        <div class="clear"></div>
        <div class="blanket">
        <div class="dropdown">
            <router-link to="/" class="dropbtn">Home</router-link>
        </div>

        <div class="dropdown">
        <router-link to="/submit" class="dropbtn">Submit</router-link>
        </div>
        
        <div class="dropdown">
        <router-link to="/result" class="dropbtn">Result</router-link>
        </div>

        <div class="dropdown">
        <router-link to="/menu3" class="dropbtn">Tutorial</router-link>
        </div>
        
      </div>
      
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarFooter',
  data() {
    return {
      menuVisible: false
    };
  },
  methods: {
    myFunction1() {
      this.toggleDropdown('myDropdown1');
    },
    myFunction2() {
      this.toggleDropdown('myDropdown2');
    },
    myFunction3() {
      this.toggleDropdown('myDropdown3');
    },
    myFunction4() {
      this.toggleDropdown('myDropdown4');
    },
    toggleDropdown(id) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].id !== id && dropdowns[i].classList.contains('show')) {
          dropdowns[i].classList.remove('show');
        }
      }
      document.getElementById(id).classList.toggle("show");
    },
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  },
  mounted() {
    window.onclick = (event) => {
      if (!event.target.matches('.dropbtn') && !event.target.matches('#menuToggle input')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
        this.menuVisible = false;
      }
    }
    
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  min-width: 1000px;
  background-color:#f1f1f1;
  font-size: 22px;
  font-family: SimHei,"黑体";
  color: black;
  line-height: 34px;
}

.blanket{
  margin-left: 350px;
  margin-top: 40px;
}

.dropbtn {
  background-color: #3498db;
  color: white;
  padding: 16px;
  font-size: 32px;
  border: none;
  cursor: pointer;
  font-family: 'Times New Roman', Times, serif;
}


.dropdown-content {
  font-size: 32px;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}


.dropdown-content a {
  font-size: 32px;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: rgb(33, 198, 165);
}
.custom-img {
  width: 20%; /* 设置宽度为20% */
  height: auto; /* 保持图片比例 */
  object-fit: cover; /* 如果图片比例不一致，可以使用cover来裁剪图片 */
}

nav {
  margin:0;
  padding: 20px 200px;
  background-color: rgb(8, 188, 152);
  height:80px;
  width: 1280px;
  
}

.navcolumn{
  margin-top: -10px;

}

.logo {
  width: 100px;
  position: absolute;
  left: 0;
  float: left;
  color:aquamarine;
  font-family: 'Times New Roman', Times, serif;
  font-size: 70px;
  margin-left: 200px;
  font-weight: bold;
  color:rgb(118, 211, 193);
}

.logo a {
  color: inherit;
  text-decoration: none; /* 去掉下划线，如果需要的话 */
}

.logo a:visited {
  color: inherit;
}

.mainpart {
  padding: 0;
  margin: 0;
}
.header {
  padding: 30px 0 5px 30px;
  margin: 20px 70px ;
  margin-top: 25px;
  margin-bottom: 5px;
  border-bottom: 1px rgb(99, 99, 99) solid;
}
.header h4{
  letter-spacing: 0.2cm;
  margin: 0;
  padding: 0;
  color: rgb(20, 76, 78);
  font-weight:bold;
  font-size: 20px;
  font-family: SimHei,"黑体";
  font-weight: bolder;
}
h3 {
  margin: 0;
  color: black;
}
h4 {
  margin: 0;
  color: black;
}
p {
  margin: 0;
  color: black;
}
.content {
  padding: 0 ;
  margin: 0 ;
  box-sizing: border-box;
}
.content ul {
  list-style: none;
  padding: 0 ;
  margin: 0;
}
.content ul li a {
  text-decoration: none;
  cursor: pointer;
}
.listpart li a :hover{
  color:  rgb(23, 185, 153);
}
.listpartmax .text h2:hover{
  color:  rgb(23, 185, 153);
}
.text {
  padding: 0 0 5px 0;
}
.text h3{
  margin: 0;
  padding:0;
}
ul {
  list-style: none;
  padding: 0;
}
a {
  text-decoration: none;
}
.imgcontainer {
  overflow: hidden;
}
.maximg {
  overflow: hidden;

}
img {
  display: block;
  border-radius: 10px ;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.6s;    /*设置动画执行的时间为0.6s*/
}
img :hover {
  transform: scale(1.2);
}
.flex-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.maximg {
  padding: 20px 20px;
  width: auto;
  float: left;
  overflow: auto;
  box-sizing: border-box;
  position: relative;
}
.listpartmax .text{
  padding: 40px 40px 20px 0;
  position:relative;
  width: 40%;
  overflow: auto;
  float: left;
  box-sizing: border-box;
}
.listcontainer {
  padding: 0;
  margin: 0;
  overflow: auto;
  box-sizing: border-box;
}
.listpartmax {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.listpartmax .text h2 {
  padding: 0 0 10px 0;
  margin: 0;
  text-align: center;
  line-height: 1cm;
  font-weight: bolder;
  color: black;
}
.listpartmax .text p {
  text-align: center;
}
.imgcontainer {
  padding: 0 0 20px 0;
  margin: 0;
  position: relative;
}
.listpart {
  padding: 10px 70px;
  min-width: 200px;
  overflow: auto;
  width:33.3%;
  float: left;
  position: relative;
  box-sizing: border-box;
}
.line {
  height: 1px;
  padding: 0 ;
  margin: 20px 70px;
  width: auto;
  background-color: rgb(99, 99, 99);
}
.clear{
  clear: both;
  margin-top: 30px;
}
.dropbtn {
  margin: 10px 20px 10px 20px;
  background-color: rgb(8, 188, 152);
  color: white;
  padding: 16px;
  font-size: 20px;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  
}
.dropbtn:hover, .dropbtn:focus {
  background-color: rgb(23, 185, 153);
  box-shadow: 10px 10px 5px 3px rgb(71, 162, 164);
}

.dropbtn-link .dropbtn {
  color: white; /* Ensure the text color remains white */
}

.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown a:hover {
  background-color: #f1f1f1;
}
.show {display:block;}



</style>
