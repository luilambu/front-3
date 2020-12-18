<template>
 <div id="CrearCompra">
   <div>
     <h1>Agregar Compra</h1>
     <form name="form" id="form">v-on:submit.prevent="procesar():">
        <p> Id_Compra: <input type="numb" name="id_compra" placeholder="Id_Compra" class="form-comtrol" v-model= "compras.id_compra"/> </p>
        <p> Cedula: <input tipe="numb" name="cedula" placeholder="cedula" class="form-comtrol" v-model= "compras.cedula"/>/></p>
        <p>Nombre_Producto: <input tipe="text" name="Nombre_Producto" placeholder="Nombre_Producto" class="form-comtrol" v-model= "compras.Nombre_producto"/>/></p>
        <p>Cantidad: <input tipe="numb" name="Cantidad" placeholder="Cantidad" class="form-comtrol" v-model= "compras.cantidad"/>/></p>
        <p>Precio: <input tipe="numb" name="Precio" placeholder="Precio" class="form-comtrol" v-model= "compras.Precio"/>/> </p>
        <p>Total: <input tipe="numb" name="Total" placeholder="Total" class="form-comtrol" v-model= "compras.Total"/>/></p>
       
        <hr />
        <input type="submit" value="">
     </form>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';

  export default { 
    name: "CrearCompranpm",    
    data : function(){ 
      return {
        compras: {
          Id_Compra: '',
          cedula: '',
          Nombre_Producto: '',
          Cantidad:'',
          Precio: '',
          Total: ''
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