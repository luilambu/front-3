<template>
 <div id="CrearCompranpm">
   <div>
     <h1>Agregar Compra</h1>
     <form name="form" id="form" v-on:submit.prevent="procesar()">
        <p> Id_Compra: <input type="numb" name="id_compra" placeholder="Id_Compra" class="form-comtrol" v-model= "compras.id_compra"/></p>
        <p> Cedula: <input tipe="numb" name="cedula" placeholder="cedula" class="form-comtrol" v-model= "compras.cedula"/></p>
        <p>Nombre_Producto: <input tipe="text" name="Nombre_Producto" placeholder="Nombre_Producto" class="form-comtrol" v-model= "compras.Nombre_producto"/></p>
        <p>Cantidad: <input tipe="numb" name="Cantidad" placeholder="Cantidad" class="form-comtrol" v-model= "compras.cantidad"/></p>
        <p>Precio: <input tipe="numb" name="Precio" placeholder="Precio" class="form-comtrol" v-model= "compras.Precio"/> </p>
        <p>Total: <input tipe="numb" name="Total" placeholder="Total" class="form-comtrol" v-model= "compras.Total"/></p>
       
        <hr />
        <button v-on:click="guardarCompra"> Agregar</button>
        <input type="submit" value="">
     </form>
    </div>
     <button v-on:click="consultacompras"> consulta compras</button>
     <table class="table">
          <thead>
              <tr>
                 <th> id_compra</th>
                 <th> Cedula</th>
                 <th> nombre_producto</th>
                 <th> cantidad</th>
                 <th> precio</th>
                 <th> Total</th>
               </tr> 
            </thead>
          </table>
        <tbody>
            
             <tr>

               <td>{{id_compra}}</td>
               <td>{{Cedula}}</td>
               <td>{{nombre_producto}}</td>
               <td>{{cantidad}}</td>
               <td>{{precio}}</td>
               <td>{{Total}}</td>
             </tr>
        </tbody>    
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
            id_compra:"",
            cedula:"",
            nombre_producto:"",
            cantidad:"",
            precio: "",
            Total:"",
            },

        }
      },
    

  methods: {
    consultacompras(){
        axios.get("https://minisap01.herokuapp.com/clientes/compras/"+this.cedula)
        .then(data =>{
              
                console.log(data);
                this.makeToast("Hecho","cliente creado","success");
            }).catch( e =>{
                console.log(e);
                 this.makeToast("Error","Error al guardar","error");
            })
    },
    guardarCompra(){
      
            axios.post("https://minisap01.herokuapp.com/clientes/compras/"+this.data)
            .then(data =>{
                console.log(data);
                this.makeToast("Hecho","cliente creado","success");
            }).catch( e =>{
                console.log(e);
                 this.makeToast("Error","Error al guardar","error");
            })
    },
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