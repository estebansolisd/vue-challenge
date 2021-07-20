<template>
  <md-field>
    <label v-if="label">{{ label }}</label>
    <md-input v-model="date"></md-input>
    <md-icon v-if="showSearchIcon">search</md-icon>
  </md-field>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SearchInput extends Vue {
  @Prop() private value!: string;
  @Prop() private onChange!: (value: string | number) => void;
  @Prop() private showSearchIcon?: boolean;
  @Prop() private label?: string;
  get searchValue(): string | number {
    return this.value;
  }
  set searchValue(newSearchValue: string | number) {
    this.onChange(newSearchValue);
  }
}
</script>

<style scoped lang="scss"></style>
