<template>
  <div class="input-field col s12 m6">
    <select @change="onChange">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.option }}
      </option>
    </select>
    <label v-if="label">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { InputEvent, Option } from "@/types";

@Component
export default class FilterSelect extends Vue {
  @Prop() private onChange?: (e: InputEvent) => void;
  @Prop() private label?: string;
  @Prop() private options?: Option[];
}
</script>

<style scoped lang="scss"></style>
