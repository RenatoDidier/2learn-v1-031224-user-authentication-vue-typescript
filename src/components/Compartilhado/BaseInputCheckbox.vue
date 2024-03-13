<script setup lang="ts">
import { defineProps } from "vue";
import { ObjetoChaveValor } from "@/models/Login/LoginModels";

const props = defineProps<{
  listaTiposAcessos: ObjetoChaveValor[];
}>();
</script>

<template>
  <div class="d-flex justify-content-center mb-3 gap-3">
    <div
      class="form-check"
      v-for="acesso in props.listaTiposAcessos"
      :key="acesso.valor"
    >
      <input
        class="form-check-input"
        type="checkbox"
        :value="acesso.valor"
        v-model="acesso.selecionado"
        :id="acesso.chave"
      />
      <label class="form-check-label" :for="acesso.chave">
        {{ acesso.chave }}
      </label>
    </div>
  </div>
</template>
