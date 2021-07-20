<template>
  <div class="md-layout">
    <div
      class="
        md-layout-item md-medium-size-100 md-large-size-100 md-xlarge-size-100
      "
    >
      <h1 class="md-display-1" style="margin-left: 16px">
        Users Role Management
      </h1>
    </div>
    <form class="md-layout md-gutter md-layout-item md-medium-size-40">
      <div class="md-layout-item">
        <search-input
          :showSearchIcon="true"
          :fullWidth="true"
          :onInput="onInput"
          :label="'Search'"
          :value="value"
        />
      </div>
      <div class="md-layout-item">
        <filter-select
          :onChange="onChange"
          :options="options"
          :label="'Role Status'"
        />
      </div>
    </form>
    <div class="md-layout-item md-medium-size-60">
      <normal-button :onClick="onClick"> CREATE NEW ROLE </normal-button>
    </div>
    <div
      class="
        md-layout-item md-medium-size-100 md-large-size-100 md-xlarge-size-100
      "
      v-if="role_status !== 'success'"
    >
      <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
    </div>

    <div
      v-else
      class="
        md-layout-item md-medium-size-100 md-large-size-100 md-xlarge-size-100
      "
    >
      <div class="md-layout md-gutter">
        <div
          class="
            md-layout-item
            md-xsmall-size-100
            md-medium-size-33
            md-large-size-33
            md-xlarge-size-33
            p-10
          "
          v-for="role in roles"
          :key="role.id"
        >
          <card
            :title="role.role"
            :subtitle="role.type.name"
            :description="role.description"
            :related_user_images="role.related_user_images"
            :showActions="role.editable"
            :showInactive="role.inactive"
            :created_at="role.created_at"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SearchInput from "@/components/SearchInput.vue";
import FilterSelect from "@/components/FilterSelect.vue";
import NormalButton from "@/components/NormalButton.vue";
import Card from "@/components/Card.vue";
import { InputEvent, Option } from "@/types";
import { mapState } from "vuex";

@Component({
  components: {
    SearchInput,
    FilterSelect,
    NormalButton,
    Card,
  },
  computed: {
    ...mapState({
      // eslint-disable-next-line
      options: (state: any) => state.optionsModule.options as Option[],
      roles: (state: any) => state.rolesModule.roles,
      role_status: (state: any) => state.rolesModule.role_status,
    }),
  },
  mounted() {
    this.$store.dispatch("loadOptions");
    this.$store.dispatch("loadRoles");
  },
})
export default class Home extends Vue {
  private value?: string;
  private filter?: string | number;
  onInput(e: InputEvent) {
    this.value = e.target.value;
  }
  onChange(value: string | number) {
    this.filter = value;
  }
  onClick() {
    this.$router.push({
      name: "Form",
      query: {
        variant: "create",
      },
    });
  }
}
</script>

<style scoped lang="scss"></style>
