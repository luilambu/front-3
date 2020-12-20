<template>

  <div id="app" class="app">
    <div class="header">
      <h1>MINISAP</h1>
      <nav> 
      <button v-on:click="init"> Inicio </button>
      <button v-on:click="AddCliente"> Agregar Cliente</button>
      <button v-on:click="AuthCliente"> Buscar Cliente </button>
      <button v-on:click="AddCompras"> Agregar Compra </button>
      </nav>
    </div>

    <div  class="main-component">
      <router-view></router-view>
    </div> 

    <div class="footer">
      <h2>Created By: Grupo 9 G2M2</h2>
    </div>

  </div>
</template>

<script>
import vueRouter from 'vue-router'

export default {
  name: 'App',
  
  data: function(){
    return {
      
    }
  },

  components: {
  },
  
  methods : {

    init: function(){
      if(this.$route.name != "portada"){
        this.$router.push({name: "portada"})
      }
      
    },

    AddCliente: function(){
      if(this.$route.name != "crear_cliente"){
        this.$router.push({name: "crear_cliente"})
      }
      
    },

    AuthCliente: function(){
      if(this.$route.name != "auth_cliente"){
        this.$router.push({name: "auth_cliente"})
      }
      
    },

    AddCompras: function(){
      if(this.$route.name != "CrearCompra"){
        this.$router.push({name: "CrearCompra"})
      }
      
    },

  },
  beforeCreated: function(){
    this.$router.push({name: "portada"})
  }     
}
</script>

<style> 
  body{
    margin: 0 0 0 0;
  }
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #093c72 ;
    color:#E5E7E9 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header h1{
    width: 20%;
    text-align: center;
  }
  .header nav {
    height: 100%;
    width: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  } 
  .header nav button{
    color: #E5E7E9;
    background: #f70202;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
  }
  .header nav button:hover{
    color: #056e13;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background: #FDFEFE ;
  }
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #283747;
    color: #E5E7E9;
  }
  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
