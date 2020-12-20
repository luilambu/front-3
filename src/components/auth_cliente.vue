<template>
   <div id="ClienteAuth">
       <div class="container_auth_cliente">
           <h2>ValidarCliente</h2>
           <form v-on:submit.prevent="processAuthcliente" >
             <input type="numb"
                  v-model="cliente_in.cc"
                  placeholder="cc">
             <br>
             <input type="cc"
                    v-model="user_in.cc"
                    placeholder="cc">
             <br>
             <button type="submit">Iniciar Sesión</button>
         </form>
     </div>

     <table class="table">
          <thead>
              <tr>
                 <th> Nombre</th>
                 <th> Cedula</th>
                 <th> Correo></th>
                 <th> Telefono</th>
                 <th> Direccion</th>
                 <th> Ciudad</th>
               </tr> 
           </thead>
        </table>
        <tbody>
            
              <tr>

               <td>{{Nombre}}</td>
               <td>{{Cedula}}</td>
               <td>{{Correo}}</td>
               <td>{{Telefono}}</td>
               <td>{{Direccion}}</td>
               <td>{{Ciudad}}</td>
             </tr>
        </tbody>    

 </div>                
</template>
<script>
  import Vue from "vue";
  import axios from 'axios';

  export default {
   
    name: "ClienteAuth",
    data: function(){
        return {
            clientes_in: {
              Nombre:"",
              Cedula:"",
              Correo:"",
              Telefono:"",
              Direccion: "",
              ciudad:"",
             }   
        }
     },

methods: {

    processAuthCliente: function() {
       var self = this
       axios.get("https://minisap01.herokuapp.com/clientes/consultar/"+ this.cc,
                  self.cliente_in, {headers: {}})
            .then((result) => {
                alert("Validacion Exitosa");
                self.$emit('cc-in', self.cliente_in.cc)
            })
       .catch((error) => {
        if (error.response.status == "404")
            alert("ERROR 404: cliente no encontrado.");
        
        });
    },

    get_clientes_in: function () {
     var este = this;
     axios.get("https://minisap01.herokuapp.com/clientes/consultar/", este.cc, {
       params:{
            cc:Cedula
       }
       }) 
       

    .then(function (response) {
           este.clientes_in= response.data;
           console.log(response);
           este.this.get_clientes_in()
     });
    }
},
     created: function () {
          this.get_clientes_in (); 
   }
}

</script>

<style>
 .auth_cliente{
   margin: 0;
   padding: 0%;
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

}

 .container_auth_cliente {
   border: 3px solid #283747;
   border-radius: 10px;
   width: 25%;
   height: 60%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}
  .auth_cliente h2{
   color: #283747;
}
  .auth_cliente form{
   width: 50%;
}
  .auth_cliente input{ 
   height: 40px;
   width: 100%;
   box-sizing: border-box;
   padding: 10px 20px;
   margin: 5px 0;
   border: 1px solid #283747;
}
  .auth_cliente button{
   width: 100%;
   height: 40px;
   color: #E5E7E9;
   background: #283747;
   border: 1px solid #E5E7E9;
   border-radius: 5px;
   padding: 10px 25px;
   margin: 5px 0;
}

  .auth_cliente button:hover{
    color: #E5E7E9;
    background: crimson;
    border: 1px solid #283747;
}
</style>