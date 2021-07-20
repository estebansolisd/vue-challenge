<template>
  <button
    @click="onClick"
    :disabled="disabled"
    class="btn waves-effect waves-light"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SearchInput extends Vue {
  @Prop() private onClick?: () => void;
  @Prop() private disabled?: boolean;
}
</script>

<style scoped lang="scss"></style>
