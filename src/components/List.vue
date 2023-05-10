<template>
  <div v-for="(item, idx) in ListData" :key="idx">
    <h5>
      <RouterLink to="/detail">{{ item.title }}</RouterLink>
    </h5>
    <p>{{ item.date }}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    ListData: Array,
  },
};
</script>
