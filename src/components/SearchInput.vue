<template>
  <md-field>
    <label v-if="label">{{ label }}</label>
    <md-input v-model="textValue"></md-input>
    <md-icon v-if="showSearchIcon">search</md-icon>
  </md-field>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SearchInput extends Vue {
  @Prop() private value!: string;
  @Prop() private showSearchIcon?: boolean;
  @Prop() private label?: string;
  @Prop() private onInput!: (value: string) => void;
  get textValue(): string {
    return this.value;
  }
  set textValue(newValue: string) {
    this.onInput(newValue);
  }
}
</script>

<style scoped lang="scss"></style>
