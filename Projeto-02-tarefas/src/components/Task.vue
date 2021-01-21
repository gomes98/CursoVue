<template>
  <div class="task" :class="stateClass" @click="$emit('taskChanged', task)">
    <span @click.stop="$emit('taskDeleted', task)" class="close">x</span>
    <p>{{ task.name }}</p>
    <span class="control" v-if="task.pending">
      <img
        @click.stop="$emit('taskStart', task)"
        src="@/assets/play.svg"
        alt="play"
      />
      <img
        @click.stop="$emit('taskStop', task)"
        src="@/assets/pause.svg"
        alt="pause"
      />
    </span>
    <span class="time">{{ start }} <br />{{ end }}</span>
  </div>
</template>

<script>
export default {
  props: {
    task: { type: Object, required: true },
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending,
      };
    },
    start() {
      if(this.task.start == null){
        return;
      }
      return new Date(this.task.start).toLocaleString();
    },
    end() {
      if(this.task.stop == null){
        return;
      }
      return new Date(this.task.stop).toLocaleString();
    },
  },
};
</script>

<style>
.task {
  position: relative;
  box-sizing: border-box;
  width: 350px;
  height: 150px;
  padding: 10px;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.pending {
  border-left: 12px solid #b73229;
  background-color: #f44336;
}
.done {
  color: #ddd;
  border-left: 12px solid #0a8d08;
  background-color: #4caf50;
  text-decoration: line-through;
}

/* .pending .close {
  border-left: 12px solid #b73229;
}
.done .close {
  border-left: 12px solid #0a8d08;
} */
.close {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

.control {
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  height: 30px;
  width: 50%;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
}
.time {
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  height: 30px;
  width: 70%;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>