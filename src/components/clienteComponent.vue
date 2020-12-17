<template>
 <div id="app">
   <div>
     <h1>Agregar Cliente</h1>
     <form name="form" id="form">v-on:submit.prevent="procesar():">
       <p>
         Nombre: <input type="text" name="nombre" placeholder="Nombre" class="form-comtrol" v-model= "cliente.nombre"/>
      </p>
      <p> 
         Cedula: <input tipe="numb" name="cedula" placeholder="cedula" class="form-comtrol" v-model= "cliente.cedula"/>/>
     </p>
      <p>
         E-mail: <input tipe="text" name="E-mail" placeholder="E-mail" class="form-comtrol" v-model= "cliente.correo"/>/>
     </p>
      <p>
         Direccion: <input tipe="text" name="Direccion" placeholder="Direccion" class="form-comtrol" v-model= "cliente.Direccion"/>/>
      </p>
       <p>
         Ciudad: <input tipe="text" name="Ciudad" placeholder="Ciudad" class="form-comtrol" v-model= "cliente.ciudad"/>/>
       </p>
       <p>
         Telefono: <input tipe="text" name="Telefono" placeholder="Telefono" class="form-comtrol" v-model= "cliente.Telefono"/>/>   
      </p>
      <hr />
      <input type="submit" value="">
     </form>
    </div>
    </div>
   </template>
   <script>
    

 
        export default { 
        
        name: 'app',
        
            data() { 
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
        }


         
                procesar() 
                    {
               const  name_form= form
            
            
           
                    
                }
                
                
                
                

</script>
