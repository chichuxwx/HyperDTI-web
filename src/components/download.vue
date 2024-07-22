<template>
  <div class="container">
    <div class="title">
      <h2>Please enter the Task ID to query:</h2>
    </div>
    <input type="text" v-model="inputResultId" placeholder="Task ID" />
    <button @click="downloadResult">OK</button>
  </div>
</template>
  
  <script>
  export default {
    props: {
      resultId: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        inputResultId: this.resultId,
      };
    },
    methods: {
      downloadResult() {
        const idToDownload = this.inputResultId || this.resultId;
        if (idToDownload) {
          window.location.href = `/download/${idToDownload}`;
        } else {
          alert('请输入编号');
        }
      },
    },
  };
  </script>
  
  <style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title h2 {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 50px;
}

input {
  margin: 10px 0;
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