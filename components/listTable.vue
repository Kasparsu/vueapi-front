<template>
  <table class="table is-bordered is-hoverable is-striped">
    <thead class="listHead">
    <td v-for="key in keys">{{key.title}}</td>
    <td v-if="actions">actions</td>
    </thead>
    <tbody>
    <tr v-for="object in objects">
      <td v-for="key in keys">{{object[key.key]}}</td>
      <td><div class="columns"><div v-for="action in actions" class="column"><button @click="$emit(action.title.toLowerCase(), object.id)" class="button" :class="action.color">{{action.title}}</button></div></div></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
    export default {
        name: "listTable",
      props:['objects', 'keys', 'actions'],
    }
</script>

<style scoped>

</style>
