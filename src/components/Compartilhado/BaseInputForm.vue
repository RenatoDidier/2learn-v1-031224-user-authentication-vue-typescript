<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps<{
  tituloLabel: string;
  idInput: string;
  tipoInput: string;
  valorInput: string;
}>();

const emits = defineEmits();

const valorInterno = ref(props.valorInput);

const updateValue = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    const newValue = event.target.value;
    valorInterno.value = newValue;
    emits("update:valorInput", newValue);
  }
};
</script>

<template>
  <div class="mb-3">
    <label :for="idInput" class="form-label">{{ tituloLabel }}</label>
    <input
      :id="idInput"
      :type="tipoInput"
      :value="valorInterno"
      @input="updateValue"
      class="form-control input-centralizado"
    />
  </div>
</template>

<style scoped>
.input-centralizado {
  width: 600px;
  margin: 0 auto;
}
</style>
