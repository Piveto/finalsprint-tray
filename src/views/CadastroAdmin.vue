<script setup>
import { reactive, ref, onMounted } from 'vue';
import axios from '../assets/axios';

const form = reactive({
  nome: '',
  email: '',
  senha: ''
});

const administrators = ref([]);

const fetchAdministrators = async () => {
  try {
    const response = await axios.get('/Auth/Listar');
    administrators.value = response.data;
  } catch (error) {
    console.error('Error fetching administrators:', error.response ? error.response.data : error);
  }
};

const submitForm = async () => {
  try {
    const response = await axios.post('/Auth/Register', {
      nome: form.nome,
      email: form.email,
      senha: form.senha
    });
    console.log('Administrator registered:', response.data);
    await fetchAdministrators(); // Fetch the updated list of administrators
    alert('Administrador cadastrado com sucesso!');
  } catch (error) {
    console.error('Error registering administrator:', error.response ? error.response.data : error);
    alert('Erro ao cadastrar administrador. Verifique o console para mais detalhes.');
  }
};

const deleteAdmin = async (id) => {
  try {
    await axios.delete(`/Auth/${id}`);
    await fetchAdministrators(); // Fetch the updated list of administrators
    alert('Administrador excluído com sucesso!');
  } catch (error) {
    console.error('Error deleting administrator:', error.response ? error.response.data : error);
    alert('Erro ao excluir administrador. Verifique o console para mais detalhes.');
  }
};

const selectedAdminId = ref(null);

const confirmDelete = async () => {
  if (selectedAdminId.value !== null) {
    await deleteAdmin(selectedAdminId.value);
    selectedAdminId.value = null;
    const modalElement = document.getElementById('deleteModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }
};

const handleShowDeleteModal = async () => {
  await fetchAdministrators();
};

const selectAdmin = (id) => {
  selectedAdminId.value = id;
};

onMounted(() => {
  fetchAdministrators();
});
</script>

<template>
  <div class="container mt-5 pt-5">
    <h2>Cadastro de Administrador</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" id="nome" v-model="form.nome" placeholder="Digite o Nome" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="form.email" placeholder="Digite o Email" required>
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" class="form-control" id="password" v-model="form.senha" placeholder="Digite a senha" required>
      </div>
      <br>
      <div class="d-flex flex-column flex-sm-row">
        <button type="submit" class="btn btn-success mb-2 mb-sm-0">Cadastrar Administrador</button>
        <button type="button" class="btn btn-danger ms-sm-3" @click="handleShowDeleteModal" data-bs-toggle="modal" data-bs-target="#deleteModal">Excluir Administrador</button>
      </div>
    </form>
  </div>

  <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteModalLabel">Excluir Administrador</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Selecione o administrador que deseja excluir:</p>
          <ul class="list-group">
            <li 
              v-for="admin in administrators" 
              :key="admin.id" 
              :class="{'list-group-item': true, 'd-flex': true, 'justify-content-between': true, 'align-items-center': true, 'selected': selectedAdminId === admin.id}" 
              @click="selectAdmin(admin.id)"
            >
              <span>{{ admin.nome }} ({{ admin.email }})</span>
              <button class="btn btn-outline-danger btn-sm" @click="selectAdmin(admin.id)">Selecionar</button>
            </li>
          </ul>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-danger" @click="confirmDelete">Confirmar Exclusão</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 70px;
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

.btn-success {
  background-color: #38414a;
  border-color: #38414a;
}

.btn-success:hover {
  background-color: #2e3a44;
  border-color: #2e3a44;
}

.btn-danger {
  background-color: #d9534f;
  border-color: #d9534f;
}

.btn-danger:hover {
  background-color: #c9302c;
  border-color: #c12e2a;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
}

.selected {
  background-color: #f8d7da;
}
</style>
