<script setup>
import { reactive } from 'vue';
import axios from '../assets/axios';

const form = reactive({
  titulo: '',
  descricao: '',
  imagemUrl: '',
  youtubeUrl: ''
});

const submitForm = async () => {
  const payload = {
    titulo: form.titulo,
    descricao: form.descricao,
    imagemUrl: form.imagemUrl,
    youtubeUrl: form.youtubeUrl,
  };

  try {
    console.log('Submitting form...', payload);
    const response = await axios.post('FAQ/Criar', payload);
    console.log('FAQ created:', response.data);
    alert('FAQ criado com sucesso!');
  } catch (error) {
    console.error('Error creating FAQ:', error.response ? error.response.data : error);
    alert('Erro ao criar FAQ. Verifique o console para mais detalhes.');
  }
};

const uploadImage = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await axios.post('FAQ/UploadImage', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    form.imagemUrl = response.data.imageUrl;
    alert('Imagem carregada com sucesso!');
  } catch (error) {
    console.error('Error uploading image:', error.response ? error.response.data : error);
    alert('Erro ao carregar a imagem. Verifique o console para mais detalhes.');
  }
};
</script>

<template>
  <div class="container mt-5">
    <br><br>
    <h2 style="text-align: center;">Cadastro de FAQs</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="titulo">Título</label>
        <input type="text" class="form-control" id="titulo" v-model="form.titulo" placeholder="Digite o título">
      </div>
      <div class="form-group">
        <label for="descricao">Descrição</label>
        <textarea class="form-control" id="descricao" v-model="form.descricao" rows="3" placeholder="Digite a descrição"></textarea>
      </div>
      <div class="form-group">
        <label for="image">Imagem</label>
        <input type="file" class="form-control" id="image" @change="uploadImage">
      </div>
      <div class="form-group">
        <label for="youtubeUrl">URL do Youtube</label>
        <input type="text" class="form-control" id="youtubeUrl" v-model="form.youtubeUrl" placeholder="Digite a URL do Youtube">
      </div>
      <br>
      <button type="submit" class="btn btn-success">Criar Card</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  margin-top: 50px;
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

.btn-success:hover {
  background-color: #2e3a44;
  border-color: #2e3a44;
}
</style>
