<template>
  <LoginForms :cadastroConta="cadastroConta" />
  <a class="referencia-link" @click="cadastroConta = !cadastroConta">{{
    cadastroConta ? "Cadastrar nova conta" : "Acessar conta"
  }}</a>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginForms from "@/components/Login/LoginForms.vue";

let cadastroConta = ref<boolean>(true);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.referencia-link {
  color: #6340f5;
  cursor: pointer;
  font-style: italic;
}
</style>
