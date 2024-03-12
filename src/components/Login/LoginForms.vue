<template>
  <div class="hello">
    <h1 class="mb-4">{{ cadastroConta ? "Acessar" : "Cadastrar" }} Conta</h1>
    <BaseInputForm
      tituloLabel="E-mail"
      idInput="emailInput"
      tipoInput="email"
      v-model:valorInput="cadastro.email"
    />
    <BaseInputForm
      tituloLabel="Senha"
      idInput="senhaInput"
      tipoInput="password"
      v-model:valorInput="cadastro.senha"
    />

    <div class="d-flex justify-content-center mb-3 gap-3">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
      </div>
    </div>

    <div
      class="d-flex flex-column justify-content-end"
      style="width: 200px; margin: 0 auto"
    >
      <button
        class="btn btn-primary mb-2"
        type="button"
        @click="redirecionadorAcaoConta(cadastro.email, cadastro.senha)"
      >
        {{ cadastroConta ? "Acessar" : "Cadastrar" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import BaseInputForm from "@/components/Compartilhado/BaseInputForm.vue";

import { Login } from "@/models/Login/LoginModels";

let cadastro = ref<Login>({
  email: "",
  senha: "",
});

const props = defineProps<{
  cadastroConta: boolean;
}>();

function redirecionadorAcaoConta(email: string, senha: string) {
  if (props.cadastroConta) {
    efetuarCadastroConta(email, senha);
  } else {
    efetuarAcessoConta(email, senha);
  }
}
function efetuarAcessoConta(email: string, senha: string) {
  console.log("acessar");
}

function efetuarCadastroConta(email: string, senha: string) {
  console.log("Cadastrar conta");
}
</script>
