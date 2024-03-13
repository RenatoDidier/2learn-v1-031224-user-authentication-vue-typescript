<template>
  <div class="hello">
    <h1 class="mb-4">{{ cadastroConta ? "Cadastrar" : "Acessar" }} Conta</h1>
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
    <BaseInputCheckbox :listaTiposAcessos="listaAcessos" v-if="cadastroConta" />
    <div
      class="d-flex flex-column justify-content-end"
      style="width: 200px; margin: 0 auto"
    >
      <button
        class="btn btn-primary mb-2"
        type="button"
        @click="redirecionadorAcaoConta(cadastro.email, cadastro.senha)"
      >
        {{ cadastroConta ? "Cadastrar" : "Acessar" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onBeforeMount } from "vue";
import BaseInputForm from "@/components/Compartilhado/BaseInputForm.vue";
import BaseInputCheckbox from "@/components/Compartilhado/BaseInputCheckbox.vue";
import { TipoUsuarioEnum } from "@/models/Login/LoginEnum";
import { Login, ObjetoChaveValor } from "@/models/Login/LoginModels";
import router from "@/router";

let cadastro = ref<Login>({
  email: "",
  senha: "",
});
let listaAcessos: Array<ObjetoChaveValor> = [];

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
  router.push("/blog");
}

function efetuarCadastroConta(email: string, senha: string) {
  console.log("Cadastrar conta");
  let lista = listaAcessos.filter((v) => v.selecionado);

  lista.forEach((element) => {
    console.log(
      `Teste para ver ${element.chave} || ${element.selecionado} || ${element.valor}`
    );
  });
}

function configuracaoListaAcesso() {
  const keys = Object.keys(TipoUsuarioEnum).filter((v) => isNaN(Number(v)));

  keys.forEach((key, index) => {
    let acesso: ObjetoChaveValor = {
      chave: key,
      valor: index + 1,
      selecionado: false,
    };
    listaAcessos.push(acesso);
    console.log("Teste para ver lista de acesso", listaAcessos[index].chave);
  });
}

onBeforeMount(() => {
  configuracaoListaAcesso();
});
</script>
