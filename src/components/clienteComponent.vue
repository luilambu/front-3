<template>
 <div id="CrearCliente">
   <div>
     <h1>Agregar Cliente</h1>
     <form name="form" id="form">v-on:submit.prevent="procesar():">
        <p>Nombre: <input type="text" name="nombre" placeholder="Nombre" class="form-comtrol" v-model= "cliente.nombre"/> </p>
        <p>Cedula: <input tipe="numb" name="cedula" placeholder="cedula" class="form-comtrol" v-model= "cliente.cedula"/>/></p>
        <p>E-mail: <input tipe="text" name="E-mail" placeholder="E-mail" class="form-comtrol" v-model= "cliente.correo"/>/></p>
        <p>Direccion: <input tipe="text" name="Direccion" placeholder="Direccion" class="form-comtrol" v-model= "cliente.Direccion"/>/></p>
        <p>Ciudad: <input tipe="text" name="Ciudad" placeholder="Ciudad" class="form-comtrol" v-model= "cliente.ciudad"/>/></p>
        <p>Telefono: <input tipe="text" name="Telefono" placeholder="Telefono" class="form-comtrol" v-model= "cliente.Telefono"/>/> </p>
        <hr />
        <input type="submit" value="">
     </form>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
//get consult(https://minisap01.herokuapp.com/clientes/consultar/cc)
//post consult(https://minisap01.herokuapp.com/clientes/registro_cliente/{cc})
  export default { 
    name: "CrearCliente",    
    data : function(){ 
      return {
        cliente: {
          nombre: '',
          cedula: '',
          correo: '',
          Telefono:'',
          Direccion: '',
          ciudad: ''
        }
      }
    },

  methods: {
  addExpense(e) {
      e.preventDefault();
      const input = document.querySelector('#input').value;
      if(input.trim() === 'none'){return alert('¡Usted debe llenar todos lo campos!')};
      {
        procesar() 
          {
            const  name_form= form     
          }
      }
    }
  }
}
</script>