<template>
  <div id="app">
    <task-export :tasks="tasks" @novosTasks="upload"/>
    <h1>Tarefas</h1>
    <TaskProgress :progress="progress" />
    <NewTask @taskAdded="addTask" />
    <TaskGrid
      :tasks="tasks"
      @taskDeleted1="deleteTask"
      @taskChanged="changeTask"
      @taskStart="startTask"
      @taskStop="stopTask"
    />
  </div>
</template>

<script>
import TaskGrid from "@/components/TaskGrid.vue";
import NewTask from "@/components/NewTask.vue";
import TaskProgress from "@/components/TaskProgress.vue";
import TaskExport from "@/components/TaskExport.vue";
export default {
  components: {
    TaskGrid,
    NewTask,
    TaskProgress,
    TaskExport
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter((t) => !t.pending).length;
      return Math.round((done / total) * 100) || 0;
    },
  },
  data() {
    return {
      tasks: [],
    };
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
    },
  },
  methods: {
    addTask(task) {
      const sameName = (t) => t.name == task.name;
      const reallyNew = this.tasks.filter(sameName).length == 0;
      if (reallyNew) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true,
          start: null,
          stop: null
        });
      }
    },
    startTask(i) {
      if(this.tasks[i].start != null){
        return  
      }
      var data = new Date()
      this.tasks[i].start = data
    },
    stopTask(i) {
      // var data =  new Date()
      // console.log(data.toLocaleString());
      if(this.tasks[i].stop != null){
        return  
      }
      var data =  new Date()
      
      this.tasks[i].stop = data
    },
    deleteTask(i) {
      this.tasks.splice(i, 1);
    },
    changeTask(i) {
      this.tasks[i].pending = !this.tasks[i].pending;
    },
    upload(i) {
      i.forEach(element => {
           this.tasks.push(element)
      });
    },
  },
  created() {
    const json = localStorage.getItem("tasks");
    this.tasks = JSON.parse(json) || [];
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
