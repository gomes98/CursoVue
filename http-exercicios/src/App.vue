<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
				v-model="usuario.nome"
				placeholder="Informe um Nome"></b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg"
				v-model="usuario.email"
				placeholder="Informe um Email"></b-form-input>
			</b-form-group>
			<b-button @click="salvar" 
			size="lg" variant="primary">Salvar</b-button>
			<b-button @click="obter" size="lg" variant="success" class="ml-2">Obter Usuários</b-button>
		</b-card>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome:</strong> {{usuario.nome}}<br>
				<strong>E-mail:</strong> {{usuario.email}} <br>
				<strong>ID:</strong> {{id}} <br>
				<b-button @click="carregar(id)" variant="warning" size="lg">Carregar</b-button>
				<b-button @click="excluir(id)" variant="danger" size="lg" class="ml-2">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			usuarios: [],
			id: null,
			usuario:{
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		limpar(){
			this.usuario.nome = '',
			this.usuario.email = '',
			this.id = null
		},
		carregar(id){
			this.id = id
			this.usuario = {...this.usuarios[id]}
		},
		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`)
			.then(()=> this.limpar())
		},
		salvar(){
			// this.$http.post('usuarios.json', this.usuario)
			// 	.then(() => {
			// 		this.limpar()
			// 	})
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
			.then(()=>{
				this.limpar()
				this.obter()
				})
		},
		obter(){
			this.$http('usuarios.json')
				.then(resp => {
					this.usuarios = resp.data
				})
				// exemplo para colocar um token
			// this.$http.defaults.headers.common['Autorization']  ="abc123"
		},
	},
	// created() {
	// 	console.log('exec!');
	// 	this.$http.post('usuarios.json',{
	// 		nome: 'Maria',
	// 		email: 'mariaeduarda@gmail.com'
	// 	}).then(res => console.log(res))
	// },
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
