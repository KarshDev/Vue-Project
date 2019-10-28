<template>
<div>
  <b-navbar type="dark" variant="dark" class="color-me">
    <b-navbar-brand>VUE LESSONS </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="color-me mr-sm-2">
        <b-nav-item><router-link to="/" exact> HOME </router-link></b-nav-item>
        <b-nav-item><router-link to="punchBag" exact>PUNCHBAG </router-link></b-nav-item>
        <b-nav-item><router-link to="canvas" exact>CANVAS </router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-2" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown class="color-me" right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em> User </em>
          </template>
          <b-dropdown-item><router-link to="login">LOGIN </router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="register">REGISTER </router-link></b-dropdown-item>
          <b-dropdown-item disabled><router-link to="profile">PROFILE </router-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <br />
</div>

</template>

<script>

</script>

<style scoped>

</style>