<!-- Detalhes.vue -->
<template>
    <div>
      <h1>Detalhes do Registro</h1>
      <p>Nome: {{ registro.nome }}</p>
      <p>RG: {{ registro.rg }}</p>
      <p>CPF: {{ registro.cpf }}</p>
      <p>Data de Nascimento: {{ registro.data_nascimento }}</p>
      <p>Data de Admissão: {{ registro.data_admissao }}</p>
      <button @click="editarRegistro">Editar</button>
      <button @click="excluirRegistro">Excluir</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        registro: {
          nome: '',
          rg: '',
          cpf: '',
          data_nascimento: '',
          data_admissao: '',
        },
      };
    },
    methods: {
      editarRegistro() {
      },
      excluirRegistro() {
      },
    },
    created() {
      const registroId = this.$route.params.id;
    },
  };
  </script>