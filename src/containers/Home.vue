<template>
  <div class="row">
    <div class="col s12">
      <h1 class="grey-text lighten-5">User Roles Management</h1>
    </div>
    <div class="col s12">
      <div class="row">
        <div class="col s12 m8">
          <div class="row">
            <form class="col s12">
              <div class="row">
                <search-input
                  :showSearchIcon="true"
                  :fullWidth="true"
                  :onInput="onInput"
                  :label="'Search'"
                  :value="value"
                />
                <filter-select
                  :onChange="onChange"
                  :options="options"
                  :label="'Role Status'"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="col s12 offset-l1 m3">
          <normal-button :onClick="onClick"> CREATE NEW ROLE </normal-button>
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
import { InputEvent, Option } from "@/types";

@Component({
  components: {
    SearchInput,
    FilterSelect,
    NormalButton,
  },
})
export default class Home extends Vue {
  private value?: string;
  private filter?: string;
  private options?: Option[] = [
    {
      option: "Active",
      value: 1,
    },
    {
      option: "Inactive",
      value: 2,
    },
    {
      option: "Active and Inactive",
      value: 3,
    },
  ];
  onInput(e: InputEvent) {
    this.value = e.target.value;
  }
  onChange(e: InputEvent) {
    this.filter = e.target.value;
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
