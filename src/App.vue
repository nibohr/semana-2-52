<template>
  <div id="app">

    <seccion-servicos></seccion-servicos>

    <div class="container">
      <div id="team" class="mt-3 pt-3">
        <h2 class="text-center mt-5">Equipo de trabajo</h2>
      </div>
      <div class="row justify-content-evenly">
        <div class="col pt-3" v-for="(item, index) of member" :key="index">
          <team-card v-bind:member="item"></team-card>
        </div>
      </div>
    </div>


    <footer-componente></footer-componente>
    
  </div>
</template>

<script>
import FooterComponente from "./components/FooterComponente.vue";
import TeamCard from "./components/TeamCard.vue";
import SeccionServicos from'./components/SeccionServicos.vue';

export default {
  name: "App",
  components: {
    FooterComponente,
    TeamCard,
    SeccionServicos
  },
  data() {
    return {
      title: "vivo acá",
      member: [
        {
          codigo: '1-GRP-52-SEM-2',
          nombre: "Roberth Sanchez",
          descripcion: "Cocinar, videojuegos, comer",
          rol: "Desarrollador Jr. Frontend",
          image: "./img/2.jpg",
        },
        {
          codigo: '2-GRP-52-SEM-2',
          nombre: "Nicolás Bohórquez",
          descripcion: "Leer, ver películas, hacer sudokus",
          rol: "Desarrollador Jr. Frontend",
          image: "./img/1.jpg",
        },
        {
          codigo: '3-GRP-52-SEM-2',
          nombre: "Diego Rojas",
          descripcion: "Diseñar, escuchar música, Cocinar",
          rol: "Desarrollador Jr. Frontend",
          image: "./img/3.jpg",
        },
        {
          codigo: '4-GRP-52-SEM-2',
          nombre: "Jhon Cruz",
          descripcion: "Ver series, practicar deportes, leer",
          rol: "Desarrollador Jr. Frontend",
          image: "./img/4.jpg",
        },
      ],
    };
  },
};
</script>

