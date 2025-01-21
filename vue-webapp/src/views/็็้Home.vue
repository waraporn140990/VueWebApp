<template>
  <div class="app center">
      <h1 class="head">Vue.js To-Do List</h1>
      <div class="input-container">
          <input v-model="newTask" placeholder="Add a new task" @keyup.enter="addTask" class="task-input" />
          <button @click="addTask" class="add-button">Add Task</button>
      </div>
      <ul class="task-list">
          <li v-for="(task, index) in tasks" :key="index" class="task-item">
              <input type="checkbox" v-model="task.completed" class="task-checkbox" />
              <span :class="{ 'completed-task': task.completed }" class="task-text">{{ task.text }}</span>
              <button @click="removeTask(index)" class="delete-button">Delete</button>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
      return {
          newTask: '',
          tasks: []
      };
  },
  methods: {
      addTask() {
          if (this.newTask.trim() !== '') {
              this.tasks.push({ text: this.newTask, completed: false });
              this.newTask = '';
          }
      },
      removeTask(index) {
          this.tasks.splice(index, 1);
      }
  }
};
</script>

<style>

/* General Styles */
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;  /* ทำให้ความสูงของ body ครอบคลุมเต็มหน้าจอ */
  text-align: center; /* จัดข้อความให้อยู่ตรงกลาง */
}

/* Centering the app container */
.center {
  flex-direction: column;
  align-items: center;
  background: rgb(184, 127, 223);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(172, 90, 140, 0.2);
  width: 90%;
  max-width: 500px;
}

/* Input Container Styles */
.input-container {
display: flex;
gap: 15px;
margin-bottom: 30px;
width: 100%;
}

.task-input {
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
width: 70%;
font-size: 1rem;
box-shadow: inset 0 2px 4px rgba(179, 31, 31, 0.1);
}

.add-button {
flex: 1;
padding: 10px;
background: linear-gradient(to right, #e97cec, #e9b4e9);
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 1rem;
font-weight: bold;
transition: all 0.3s ease;
}

.add-button:hover {
background: linear-gradient(to right, #28a745, #6fdb72);
transform: translateY(-2px);
}

/* Task List Styles */
.task-list {
list-style-type: none;
padding: 0;
width: 100%;
}

.task-item {
display: flex;
align-items: center;
justify-content: space-between;
background: white;
padding: 15px;
margin-bottom: 10px;
border-radius: 5px;
box-shadow: 0 4px 8px rgba(184, 109, 109, 0.1);
transition: transform 0.2s ease;
}

.task-item:hover {
transform: scale(1.02);
}

.task-checkbox {
margin-right: 15px;
}

.task-text {
flex-grow: 1;
font-size: 1rem;
}

.completed-task {
text-decoration: line-through;
color: #95a5a6;
}

.delete-button {
padding: 5px 15px;
background: linear-gradient(to right, #e74c3c, #f39c12);
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 0.9rem;
transition: all 0.3s ease;
}

.delete-button:hover {
background: linear-gradient(to right, #c0392b, #d35400);
transform: scale(1.1);
}

</style>