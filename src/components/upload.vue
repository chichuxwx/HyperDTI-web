<template>
    <div class="container">
      <div class="title">
      <p>Please enter your number</p>
    </div>
    <div class="title1">
      <p><input type="number" v-model="number1" placeholder="输入第一个数字" /></p>
      <p><input type="number" v-model="number2" placeholder="输入第二个数字" /></p>
      <p><button @click="submitNumbers">Submit</button></p>
      <p v-if="resultId"><div style="font-weight: bold;">Your code is:</div>{{ resultId }}</p>
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        number1: null,
        number2: null,
        resultId: null,
      };
    },
    methods: {
      async submitNumbers() {
        try {
          const response = await axios.post('/api/process_numbers', {
            number1: this.number1,
            number2: this.number2,
          });
          this.resultId = response.data.id;
        } catch (error) {
          console.error('Error submitting numbers:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container{
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .title{
    background-color: rgba(255, 255, 255, 0.4);
    margin-left: 20px;
    width: 1080px;
    height:70px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .title1{
    background-color: rgba(255, 255, 255, 0.4);
    margin-left: 20px;
    width: 1080px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding:0;
  }

.title p{
  font-size: 20px;
  color:gray;
  margin-top: 25px;
  margin-left:10px;
}

input {
  margin: 1px 0;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #218838;
}
  </style>
  