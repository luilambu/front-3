<template>
    <div id="Portada">
        <h2>Hola <span> Humano, </span> ¡Bienvenido!</h2>
    </div>
</template>

<script>
    export default {
        name: "Portada",
        data:function(){
            return {
                Saludo: ""
            }
        },

        created: function(){
            this.Saludo = "Hola"
        }
    }
</script>

<style>
    #Portada{
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;    
        align-items: center;
    }

    #Portada h2{
        font-size: 50px;
        color: #000000;
    }

    #Portada span{
        color: crimson;
        font-weight: bold;
    }
</style>