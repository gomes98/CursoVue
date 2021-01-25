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
    <span class="control" v-else> Tarefa Finalizada </span>
    <span class="time" v-if="task.pending">{{ start }} <br />{{ end }}</span>
    <span class="time" v-else>{{ dateDiff() }} </span>
  </div>
</template>

<script>
export default {
  props: {
    task: { type: Object, required: true },
  },
  methods: {
    dateDiff() {
      // pega o valor absoludo entre as datas
      let diferenca = Math.abs(this.task.start -this.task.stop);
      // contantes para calculo
      const umDiaMS = 1000 * 60 * 60 * 24; // 86400000 ms tem em um dia
      const umaHoraMS = 1000 * 60 * 60; // 3600000 ms em uma hora
      const umaMinutosMS = 1000 * 60;
      // operações envolvendo datas
      let dias = Math.trunc(diferenca / umDiaMS);
      let horas = Math.trunc((diferenca - dias * umDiaMS) / umaHoraMS);
      let minutos = Math.trunc(
        (diferenca - (dias * umDiaMS + horas * umaHoraMS)) / umaMinutosMS
      );
      let segundos = Math.trunc(
        (diferenca -
          (dias * umDiaMS + horas * umaHoraMS + minutos * umaMinutosMS)) /
          1000
      );
      return `D:${dias} ${horas}:${minutos}:${segundos}`
      // return { dias, horas, minutos, segundos };
    },
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending,
      };
    },
    start() {
      if (this.task.start == null) {
        return;
      }
      return new Date(this.task.start).toLocaleString();
    },
    end() {
      if (this.task.stop == null) {
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