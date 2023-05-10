<template>
  <div v-for="(item, idx) in ListData" :key="idx">
    <h5>{{ item.title }}</h5>
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
