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
import { Option } from "@/types";

@Component
export default class FilterSelect extends Vue {
  @Prop() private onChange!: (value: string | number) => void;
  @Prop() private label?: string;
  @Prop() private value!: string | number;
  @Prop() private options?: Option[];

  get selectValue() : string | number {
    return this.value;
  }
  set selectValue(value: string | number) {
    this.onChange(value);
  }
}
</script>

<style scoped lang="scss"></style>
