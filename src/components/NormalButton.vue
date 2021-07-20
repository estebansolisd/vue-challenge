<template>
  <md-button class="md-raised md-primary" @click="onClick" :disabled="disabled">
    <slot></slot>
  </md-button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NormalButton extends Vue {
  @Prop() private onClick?: () => void;
  @Prop() private disabled?: boolean;
}
</script>

<style scoped lang="scss"></style>
