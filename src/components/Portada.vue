<template>
    <div id="Portada" class="portada">
        <h2>Hola <span> Humano, </span> ¡Bienvenido!</h2>
    </div>
</template>

<script>
    export default {
        name: "Portada",
        
    }
</script>

<style>
    #portada{
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;    
        align-items: center;
    }

    #portada h2{
        font-size: 50px;
        color: #000000;
    }

    #portada span{
        color: crimson;
        font-weight: bold;
    }
</style>