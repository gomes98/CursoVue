<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho" >Formulário</div>
				<nome-completo  v-model="nomeCompleto"/>
				<rotulo nome="E-mail" >
					<input type="text" name="email" v-model="email" >
				</rotulo>
				<rotulo nome="Senha" >
					<input type="password" name="senha" v-model="senha">
				</rotulo>
				<rotulo nome="Armazenar Dados" >
					<input type="checkbox" name="armazenarDados" v-model="armazenarDados">
				</rotulo>

				<button @click.prevent="enviar">
					Enviar
				</button>
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="painel"  v-if="enviado" >
				<div class="cabecalho">Resultado</div>
				<rotulo nome="Nome">
					<span>{{nomeCompleto.nome}}</span>
				</rotulo>
				<rotulo nome="Sobrenome" >
					<span>{{nomeCompleto.sobreNome}}</span>
				</rotulo>
				<rotulo nome="E-mail">
					<span>{{email}}</span>
				</rotulo>
				<rotulo nome="Senha">
					<span>{{senha}}</span>
				</rotulo>
				<rotulo nome="Armazenar Dados">
					<span>{{armazenarDados}}</span>
				</rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeCompleto from './components/NomeCompleto.vue'

export default {
	name: 'app',
	components: { NomeCompleto, Rotulo },
	data() {
		return {
			enviado: false,
			nomeCompleto:{
				nome:'',
				sobreNome:'',
			},
			email:'',
			senha:'',
			armazenarDados:true
		}
	},
	methods: {
		enviar(){
			this.enviado = true
		}
	},
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
