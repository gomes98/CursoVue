<template>
  <div class="task-grid">
      <template v-if="tasks.length">
          <Task 
          v-for="(task, i) in tasks" 
          :key="task.name" 
          :task="task"
          @taskDeleted="$emit('taskDeleted1', i)"
          @taskChanged ="$emit('taskChanged', i)"
          @taskStart ="$emit('taskStart', i)"
          @taskStop ="$emit('taskStop', i)"
          ></Task>
      </template>
      <p v-else class="no-task">Sua vida Esta em dia ;)</p>
  </div>
</template>

<script>
import Task from '@/components/Task.vue'
export default {
    components:{Task},
props:{
    tasks: {type: Array, required: true},
},
}
</script>

<style>
.task-grid{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.task-grid .task{
    margin: 10px;
}
.no-task{
    color: #AAA;
        font-size: 1.7rem;
}
</style>