<script setup>
</script>

<template>
  <div class="container mt-5">
    <div class="about-section">
      <h2 class="text-center">Sobre o Projeto</h2>
      <p class="lead text-center mt-4">
        Bem-vindo ao nosso projeto! Este projeto é uma iniciativa que busca criar uma experiência 
        incrível para os seus usuários. Aqui você encontrará uma variedade de funcionalidades e serviços 
        que foram cuidadosamente desenvolvidos para atender às suas necessidades.
      </p>
      <div class="row mt-5">
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <img src="/tray.jpg" class="img-fluid rounded img-500" alt="Sobre o Projeto">
        </div>
        <div class="col-md-6">
          <h3>Objetivos</h3>
          <p>
            Nosso principal objetivo é fornecer uma plataforma robusta e fácil de usar, onde os usuários 
            possam se beneficiar das diversas funcionalidades que oferecemos. Queremos garantir que cada 
            usuário tenha uma experiência satisfatória e encontre valor no que oferecemos.
          </p>
          <h3>Funcionalidades</h3>
          <ul>
            <li>Gestão de FAQs</li>
            <li>Chat-Bot integrado para suporte</li>
            <li>Interface amigável e responsiva</li>
            <li>Segurança e privacidade dos dados</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-section {
  background: #f7f7f7;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.about-section h2 {
  color: #38414a;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.about-section .lead {
  color: #555;
  font-size: 1.25rem;
}

.about-section img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.img-500 {
  width: 500px;
  height: 500px;
  object-fit: cover;
}

.about-section h3 {
  color: #38414a;
  margin-top: 20px;
}

.about-section p {
  color: #333;
}

.about-section ul {
  list-style-type: disc;
  padding-left: 20px;
}

.about-section ul li {
  color: #555;
  margin-bottom: 10px;
}
</style>
