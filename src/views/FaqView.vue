<script setup>
import { ref, onMounted } from 'vue';
import axios from '../assets/axios';

const cards = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const faqToDelete = ref(null);

const fetchFAQs = async (page = 1) => {
  try {
    const response = await axios.get('/FAQ/Listar', {
      params: {
        pageNumber: page,
        pageSize: 8
      }
    });
    cards.value = response.data.items;
    totalPages.value = response.data.totalPages;
    currentPage.value = response.data.pageNumber;
  } catch (error) {
    console.error('Error fetching FAQs:', error.response ? error.response.data : error);
  }
};

const handleDelete = async () => {
  if (faqToDelete.value !== null) {
    try {
      await axios.delete(`/FAQ/${faqToDelete.value}`);
      fetchFAQs(currentPage.value);
      faqToDelete.value = null;
    } catch (error) {
      console.error('Error deleting FAQ:', error.response ? error.response.data : error);
    }
  }
};

const confirmDelete = (id) => {
  faqToDelete.value = id;
};

const changePage = (page) => {
  if (page > 0 && page <= totalPages.value) {
    fetchFAQs(page);
  }
};

onMounted(() => {
  fetchFAQs();
});

const getAbsoluteUrl = (url) => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
};
</script>

<template>
  <div class="container my-4 pt-5">
    <h2 class="text-center mb-5 mt-4">Listagem de FAQs</h2>
    <div class="row">
      <div v-for="card in cards" :key="card.id" class="col-md-3 mb-4">
        <div class="card h-100">
          <img :src="card.imagemUrl" class="card-img-top" alt="Card image">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ card.titulo }}</h5>
            <p class="card-text">{{ card.descricao }}</p>
            <div class="d-flex justify-content-between mt-auto">
              <a :href="getAbsoluteUrl(card.youtubeUrl)" target="_blank" class="btn btn-primary btn-sm flex-grow-1 me-1">Sobre</a>
              <button class="btn btn-danger btn-sm flex-grow-1 ms-1" @click="confirmDelete(card.id)" data-bs-toggle="modal" data-bs-target="#confirmDeleteModal">Remover</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="changePage(currentPage - 1)">Anterior</button>
        </li>
        <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
          <button class="page-link" @click="changePage(page)">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="changePage(currentPage + 1)">Próximo</button>
        </li>
      </ul>
    </nav>

    <div class="modal fade" id="confirmDeleteModal" tabindex="-1" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="confirmDeleteModalLabel">Confirmar Exclusão</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Tem certeza de que deseja excluir este FAQ?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger" @click="handleDelete" data-bs-dismiss="modal">Excluir</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 70px;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card {
  display: flex;
  flex-direction: column;
}

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.btn-primary, .btn-danger {
  padding: 0.400rem 0.90rem;
  font-size: 0.900rem;
}

.text-white {
  color: #fff !important;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
}
</style>
