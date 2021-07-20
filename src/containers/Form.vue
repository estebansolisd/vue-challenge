<template>
  <div class="p-10">
    <div class="md-layout">
      <div class="md-layout-item">
        <normal-button :onClick="back">
          <md-icon> arrow_back </md-icon>
          Back
        </normal-button>
      </div>
    </div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Roles</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100 md-xlarge-size-100">
              <md-field>
                <label for="age">Title</label>
                <md-input type="string" v-model="title" />
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-xlarge-size-100">
              <md-field>
                <label for="age">Description</label>
                <md-input type="string" v-model="description" />
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-xlarge-size-100">
              <filter-select
                :onChange="onChange"
                :value="value"
                :options="typeRoles"
                :label="'Type Roles'"
              />
            </div>
            <div class="md-layout-item md-small-size-100 md-xlarge-size-100">
              <md-switch v-model="inactive" class="md-primary"
                >Inactive</md-switch
              >
            </div>
            <div class="md-layout-item md-small-size-100 md-xlarge-size-100">
              <md-switch v-model="editable" class="md-primary"
                >Editable</md-switch
              >
            </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary">Save Role</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="isSaved">Role saved !</md-snackbar>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

import NormalButton from "@/components/NormalButton.vue";
import FilterSelect from "@/components/FilterSelect.vue";
@Component({
  components: {
    NormalButton,
    FilterSelect,
  },
  computed: {
    ...mapState({
      roles: (state: any) => state.rolesModule.roles,
    }),
  },
  methods: {
    back() {
      this.$router.push("/");
    },
  },
})
export default class Form extends Vue {
  @Prop() private id?;
  @Prop() private variant?;
  declare $v: any;
  private isSaved = false;
  private inactive = false;
  private title = "";
  private description = "";
  private editable = false;
  private typeId = 1;
  private roles = [];

  get created_at() {
    var d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("/");
  }

  onChange(typeId: number) {
    this.typeId = typeId;
  }

  mounted() {
    console.log(this.roles);

    console.log(this.variant, "variant");
    console.log(this.id, "id");

    if (this.variant === "edit") {
      const currentRole = this.roles.find(
        (r: any) => r.id === Number(this.id)
      ) as any;
      this.title = currentRole.role;
      this.description = currentRole.description;
      this.editable = currentRole.editable;
      this.inactive = currentRole.inactive;
      this.typeId = currentRole.type.id;
    }
  }

  get typeRoles() {
    return [
      { option: "Administrator Role", value: 1 },
      { option: "Job Administration Role", value: 2 },
    ];
  }
}
</script>

<style scoped lang="scss"></style>
