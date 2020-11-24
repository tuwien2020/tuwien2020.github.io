<template>
  <h1>It's dangerous to go alone!</h1>
  <h1>
    <a href="https://tuwien.hypedlabs.wtf/auth/discord">Take this</a>
    <span class="explanation-text">Join the Discord Server</span>
  </h1>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch, watchEffect } from "vue";

export default defineComponent({
  components: {},
  setup() {
    const count = ref(0);

    return {
      count,
    };
  },
});
</script>
<style scoped>
a:hover {
}
</style>
