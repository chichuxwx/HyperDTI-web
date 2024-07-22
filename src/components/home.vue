<template>
    <div class="welcome"><h2>Welcome to HyperDTI Server!</h2></div>
    <div class="container">
    <div class="content">
        <div class="msgbox">
          <h3>What is HyperDTI Server</h3>
          <p>HyperDTI Server is …………</p>
          <p>HyperDTI Server is …………</p>
          <p>HyperDTI Server is …………</p>
          <p>HyperDTI Server is …………test test test testtest test test testtesttesttesttesttesttesttesttesttesttest test</p>
        </div>
        <img class="img1" src="/images/临时.png">
      </div>
        <img class="img2" src="/images/临时.png">
    <div class="content">
        <div class="msgbox1">
          <h3>What is HyperDTI</h3>
          <p>HyperDTI is …………</p>
          <p>HyperDTI  is …………</p>
          <p>HyperDTI is …………</p>
          <p>HyperDTI is …………test test test testtest test test testtesttesttesttesttesttesttesttesttesttest test</p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 170px;
    max-width: 100%;
    max-height: auto;
  }
  

.welcome h2 {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 50px;
}

  
  .content {
    display: flex;
    align-items: flex-start; /* 对齐消息框和图片 */
    margin-top: 50px;
  }
  
  .msgbox {
    background-color: rgba(255, 255, 255, 0.4);
    max-width: 700px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-right: 20px; /* 与图片保持一些间距 */
    z-index: 2;
  }

  .msgbox1 {
    background-color: rgba(255, 255, 255, 0.4);
    max-width: 700px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 2;
    margin-left: 700px;
    margin-top: -370px;
  }
  
  .msgbox h3 {
    color: grey;
    margin-bottom: 10px;
  }
  
  .msgbox p {
    color: gray;
    max-width: 650px;
    overflow-wrap: break-word;
    white-space: normal;
  }
  
  .msgbox1 h3 {
    color: grey;
    margin-bottom: 10px;
  }
  
  .msgbox1 p {
    color: gray;
    max-width: 650px;
    overflow-wrap: break-word;
    white-space: normal;
  }

  .img1 {
    max-width: 600px; /* 控制图片大小 */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: -50px;
  }
  .img2 {
    max-width: 600px; /* 控制图片大小 */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: -210px;
    margin-left: 70px;
  }
  </style>
  