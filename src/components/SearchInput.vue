<template>
  <div class="input-field col s12 m6">
    <input :id="id" :placeholder="placeholder" type="search" class="validate" />
    <label v-if="label" :for="id">{{ label }}</label>
    <i v-if="showSearchIcon" class="material-icons small prefix">search</i>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { InputEvent } from "@/types";

@Component
export default class SearchInput extends Vue {
  @Prop() private value?: string;
  @Prop() private id?: string;
  @Prop() private onInput?: (e: InputEvent) => void;
  @Prop() private showSearchIcon?: boolean;
  @Prop() private placeholder?: string;
  @Prop() private label?: string;
}
</script>

<style scoped lang="scss"></style>
