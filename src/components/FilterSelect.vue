<template>
  <md-field>
    <label v-if="label">{{ label }}</label>
    <md-select v-model="selectValue">
      <md-option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        >{{ option.option }}</md-option
      >
    </md-select>
  </md-field>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { InputEvent, Option } from "@/types";

@Component
export default class FilterSelect extends Vue {
  @Prop() private label?: string;
  @Prop() private value!: number;
  @Prop() private options?: Option[];
  @Prop() private onChange!: (value: number) => void;
  get selectValue() : number {
    return this.value;
  }
  set selectValue(newValue : number) {
    this.onChange(newValue);
  }
}
</script>

<style scoped lang="scss"></style>
