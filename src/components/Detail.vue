<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h3>상세페이지</h3>

        <!-- ListData[현재url파라미터]

        1. $route.parmas 
        : 모든 파라미터

        2. $route.parmas.id
        : id라고 지정한 파라미터
      -->
        <h5>{{ ListData[$route.params.id].title }}</h5>
        <p>{{ ListData[$route.params.id].date }}</p>

        <div class="mt-4">
          <p>{{ ListData[$route.params.id].content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    ListData: Array,
  },
};
</script>
