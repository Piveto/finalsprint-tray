<script setup>
import { ref } from 'vue';

const slides = ref([
  {
    id: 1,
    title: 'Bem-vindo ao FAQBOT - Tray',
    description: 'Descubra todas as funcionalidades que temos a oferecer.',
    image: 'https://via.placeholder.com/800x400',
  },
  {
    id: 2,
    title: 'Navegação Fácil',
    description: 'Use o menu lateral para navegar por todas as seções.',
    image: 'https://via.placeholder.com/800x400',
  },
  {
    id: 3,
    title: 'Cadastrar FAQs',
    description: 'Adicione novas perguntas frequentes para ajudar seus clientes.',
    image: 'https://via.placeholder.com/800x400',
  },
  {
    id: 4,
    title: 'Gerencie Administradores',
    description: 'Adicione ou remova administradores facilmente.',
    image: 'https://via.placeholder.com/800x400',
  },
]);

const cards = ref([
  {
    id: 1,
    title: 'Documentação Completa',
    description: 'Acesse a documentação completa para entender como usar todas as funcionalidades.',
    link: '#',
  },
  {
    id: 2,
    title: 'Suporte ao Cliente',
    description: 'Entre em contato com nosso suporte para obter ajuda personalizada.',
    link: '#',
  },
  {
    id: 3,
    title: 'Atualizações e Novidades',
    description: 'Fique por dentro das últimas atualizações e novidades do FAQBOT - Tray.',
    link: '#',
  },
]);
</script>

<template>
  <div>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div class="carousel-inner">
        <div v-for="(slide, index) in slides" :key="slide.id" :class="['carousel-item', { active: index === 0 }]">
          <img :src="slide.image" class="d-block w-100" :alt="slide.title">
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ slide.title }}</h5>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="container my-5">
      <div class="row">
        <div v-for="card in cards" :key="card.id" class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">{{ card.description }}</p>
              <a :href="card.link" class="btn btn-primary">Saiba mais</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-item {
  height: 400px;
}

.carousel-item img {
  object-fit: cover;
  height: 100%;
}

.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-body {
  text-align: center;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 1rem;
}
</style>
