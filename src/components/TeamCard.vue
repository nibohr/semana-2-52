<template>
    <div>
        <div class="card bg-white border-0"> 
            <img :src="member.imagen" class="card-img-top mx-auto d-block mt-3" alt="Foto integrnate del equipo" style="border-radius: 50%; width: 50%;">
            <div class="card-body">
                <h4 class="card-title text-secondary text-center">{{member.nombre}}</h4>
                <p class="card-text text-secondary text-center"><em>Código: {{member.codigo}}</em></p>
                <p class="card-text text-secondary text-center"><b>Pasatiempos:</b> {{member.descripcion}}</p>
                <p class="card-text text-secondary text-center"><b>Rol:</b> {{ member.rol }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeamCard",
        props: ['member']
    }
</script>

<style scoped> 

</style>
