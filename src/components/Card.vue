<template>
  <md-card>
    <md-card-header>
      <div class="md-title">{{ title }}</div>
      <div class="md-subhead">{{ subtitle }}</div>
    </md-card-header>

    <md-card-content>
      {{ description }}
      <div>
        <md-avatar :key="img.id" v-for="img in firstSixImages">
          <img :src="img.src" :alt="img.alt" />
        </md-avatar>
        <md-avatar class="md-avatar-icon" v-if="related_user_images.length > 6">
          +{{ related_user_images.length - 6 }}
        </md-avatar>
      </div>
    </md-card-content>

    <md-card-actions md-alignment="right">
      <template v-if="showActions">
        <md-button>Edit</md-button>
        <md-button class="md-accent">Delete</md-button>
      </template>
      <span v-else class="p-10">
        <md-icon>lock</md-icon>
      </span>
    </md-card-actions>
  </md-card>
</template>

<script lang="ts">
import { RelatedUserImage } from "@/types";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop() private description?: string;
  @Prop() private created_at?: string;
  @Prop() private related_user_images!: RelatedUserImage[];
  @Prop() private subtitle?: string;
  @Prop() private title?: string;
  @Prop() private showActions?: boolean;
  @Prop() private showLock?: boolean;

  get firstSixImages(): RelatedUserImage[] {
    return this.related_user_images.slice(0, 6);
  }
}
</script>

<style scoped lang="scss"></style>
