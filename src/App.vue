<template>
  <div>
    <nav class="navbar navbar-dark fixed-top" data-tour="step-1">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand ms-4" href="#">
            <i class="bi bi-robot"></i>FAQBOT
          </a>
        </div>
        <div
          class="offcanvas offcanvas-start text-bg-dark menu-oculto"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Administrator
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <router-link class="nav-link links-menu" to="/" data-tour="step-2">
                  <i class="bi bi-list-ul"></i> Listar FAQs
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link links-menu" to="/cadastrofaq" data-tour="step-3">
                  <i class="bi bi-pencil-square"></i> Novo FAQ
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link links-menu" to="/cadastroadmin" data-tour="step-4">
                  <i class="bi bi-person-plus"></i> Novo Administrador
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link links-menu" to="/chatbot">
                  <i class="bi bi-chat-dots"></i> Chat-Bot
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link links-menu" to="/tour">
                  <i class="bi bi-stars"></i> Tour Interativo
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link links-menu" to="/sobre">
                  <i class="bi bi-info-circle"></i> Sobre o Projeto
                </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link links-menu" @click="logout">
                  <i class="bi bi-box-arrow-right"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from './assets/axios';
import { useRouter } from 'vue-router';

const login = async (email, password) => {
  const response = await axios.post('/Auth/Login', { email, password });
  localStorage.setItem('token', response.data.token);
  return response.data;
};

const logout = () => {
  localStorage.removeItem('token');
};

const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

export default {
  setup() {
    const router = useRouter();

    const logoutUser = () => {
      logout();
      router.push('/login');
    };

    return {
      logout: logoutUser
    };
  }
};
</script>

<style>
.navbar {
  background-color: #4169E1;
  background: linear-gradient(90deg, rgba(65, 105, 225, 1) 25%, rgba(65, 105, 225, 1) 100%);
  font-weight: bold;
}

.logo-header {
  height: 36px;
  margin: 0 10px 0 0;
  filter: drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.3));
  font-size: 25px;
}

.offcanvas-title,
.btn-close {
  font-size: 22px;
  margin: 5px 0 0 5px;
}

.menu-oculto {
  background-color: #4169E1;
  background: linear-gradient(90deg, rgba(65, 105, 225, 1) 25%, rgba(65, 105, 225, 1) 100%);
}

.bi {
  font-size: 24px;
  margin: 0 10px 0 10px;
}

.links-menu {
  font-size: 15px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
}

router-link {
  text-decoration: none;
}

.nav-item {
  transition: 0.3s;
}

.nav-item:hover {
  transform: scale(1.05);
  transition: 0.3s;
}

.nav-item:hover .links-menu {
  color: #ffeb3b;
}

.footer {
  position: fixed;
  bottom: 0;
  padding: 15px;
  color: rgba(255, 255, 255, 0.7);
}
</style>
