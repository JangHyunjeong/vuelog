<template>
  <div v-for="item in ListData" :key="item.number">
    <h5>
      <!-- <h5 @click="$router.push('./detail')"> -->
      <RouterLink :to="`/detail/${item.number}`">{{ item.title }}</RouterLink>
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
