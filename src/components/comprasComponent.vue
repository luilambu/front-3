<template>
 <div id="CrearCompranpm">
   <div>
     <h1>Agregar Compra</h1>
     <form name="form" id="form" v-on:submit.prevent="guardarCompra()">
        <p> No_Compra: <input type="numb" name="id_compra" placeholder="Id_Compra" class="form-comtrol" v-model= "compras.id_compra"/></p>
        <p> Cedula: <input tipe="numb" name="cedula" placeholder="cedula" class="form-comtrol" v-model= "compras.cedula"/></p>
        <p>Nombre_Producto: <input tipe="text" name="Nombre_Producto" placeholder="Nombre_Producto" class="form-comtrol" v-model= "compras.nombre_producto"/></p>
        <p>Cantidad: <input tipe="numb" name="Cantidad" placeholder="Cantidad" class="form-comtrol" v-model= "compras.cantidad"/></p>
        <p>Precio: <input tipe="numb" name="Precio" placeholder="Precio" class="form-comtrol" v-model= "compras.Precio"/> </p>
        <p>Total: <input tipe="numb" name="Total" placeholder="Total" class="form-comtrol" v-model= "compras.Total"/></p>
       
        <hr />
        <!--<button v-on:click="guardarCompra"> Agregar</button>-->
        <button type="submit">guardar</button>
     </form>
    </div>
    <h2>Consulta Compras</h2>
    <form name="consulta" id="consulta" v-on:submit.prevent="consultacompras()">
      <p> Cedula: <input tipe="numb" name="cedula" placeholder="cedula" class="form-comtrol" v-model= "compras.cedula"/></p>
      <button type="submit"> consulta </button>
    </form>
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

               <td>{{compra.id_compra}}</td>
               <td>{{compra.cedula}}</td>
               <td>{{compra.nombre_producto}}</td>
               <td>{{compra.cantidad}}</td>
               <td>{{compra.Precio}}</td>
               <td>{{compra.Total}}</td>
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
            compra:{},
            compras: {
            id_compra:"",
            cedula:"",
            nombre_producto:"",
            cantidad:"",
            precio:"",
            Total:""
            },
        }
      },
    

  methods: {

    consultacompras(){
        console.log(this.compras.cedula)
        axios.get("https://minisap01.herokuapp.com/clientes/compras/"+this.compras.cedula)
          .then(response =>{
            for(var i=0; i<response.data.length; i++){
              this.compra=response.data[i];
            }
                console.log(response);

                alert("Hecho compras consultadas");
            }).catch( e =>{
                console.log(e);
                alert("Error al consultar");
            })
    },
    guardarCompra(){
      console.log(this.compras)
            axios.post("https://minisap01.herokuapp.com/clientes/compras/agregar/",{
              "id_compra": this.compras.id_compra,
     	        "cc_cliente": this.compras.cedula,
              "nombre_producto": this.compras.nombre_producto,
              "cantidad": this.compras.cantidad,
              "precio_pub": this.compras.Precio,
              "costo_total": this.compras.Total 
            })
            .then(response =>{
                console.log(Response);
                alert("cliente creado","success");
            }).catch( error =>{
                console.log(response);
                alert("Error al guardar","fallido");
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