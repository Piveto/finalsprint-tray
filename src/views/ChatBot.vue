<script setup>
import { ref } from 'vue';

const messages = ref([]);
const newMessage = ref('');

const sendMessage = () => {
  if (newMessage.value.trim() !== '') {
    messages.value.push({ text: newMessage.value, isUser: true });
    newMessage.value = '';

    setTimeout(() => {
      messages.value.push({ text: 'Resposta.', isUser: false });
    }, 1000);
  }
};
</script>

<template>
  <br><br>
  <div class="container mt-5">
    <h2 style="text-align: center;">Chat-Bot</h2>
    <div class="chat-container">
      <div class="chat-messages">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="['chat-message', message.isUser ? 'user-message' : 'bot-message']"
        >
          {{ message.text }}
        </div>
      </div>
      <div class="chat-input">
        <input
          type="text"
          v-model="newMessage"
          @keypress.enter="sendMessage"
          placeholder="Digite sua mensagem"
          class="form-control"
        />
        <button @click="sendMessage" class="btn btn-primary mt-2">Enviar</button>
      </div>
    </div>
    <div class="lista-produtos">
      <CardProdutos />
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.chat-messages {
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.chat-message {
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  max-width: 80%;
}

.user-message {
  background-color: #d1e7dd;
  align-self: flex-end;
}

.bot-message {
  background-color: #f8d7da;
  align-self: flex-start;
}

.chat-input {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.chat-input input {
  flex: 1;
  margin-bottom: 10px;
}

.lista-produtos {
  margin-top: 8vh;
}
</style>
