<template>
  <div class="home">
    <BoardList msg="게시판" />
  </div>
</template>

<script>
// @ is an alias to /src
import BoardList from "@/components/BoardList.vue";

export default {
  name: "HomeView",
  components: {
    BoardList,
  },
};
</script>
