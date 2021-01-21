<template>
  <div class="export">
    <img @click="abrirFile" src="@/assets/upload.svg" alt="import" />
    <img @click="download" src="@/assets/download.svg" alt="export" />
    <input @change="upload" id="fileInput" type="file" />
  </div>
</template>

<script>
export default {
  props: {
    tasks: { type: Array, required: true },
  },
  methods: {
    abrirFile() {
      document.getElementById("fileInput").click();
    },
    upload() {
        var vue = this;
      var file = document.getElementById("fileInput").files[0];
      const reader = new FileReader();
      reader.onloadend = function () {
        var resultado = reader.result;

        vue.$emit("novosTasks", JSON.parse(resultado))
      };
      reader.readAsText(file);
    },
    download() {
      var content = JSON.stringify(this.tasks);
      var contentType = "application/json";
      var a = document.createElement("a");
      var blob = new Blob([content], { type: contentType });
      a.href = window.URL.createObjectURL(blob);
      a.download = "tasks.json";
      a.click();
    },
  },
};
</script>

<style>
.export {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  height: 10%;
  width: 10%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

.export input {
  display: none;
}
</style>