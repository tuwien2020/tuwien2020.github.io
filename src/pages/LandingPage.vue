<template>
  <h1>It's dangerous to go alone!</h1>
  <h1>
    <a href="https://tuwien.hypedlabs.wtf/auth/discord" class="join-link"
      >Take this</a
    >
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
.explanation-text {
  visibility: hidden;
  opacity: 0;
  font-size: 20px;
  background: var(--sexy-text-color);
  color: white;
  padding: 4px 8px;
  margin-left: 12px;
  border-radius: 12px;
  position: relative;
  transition: opacity 400ms;
}
.explanation-text::before {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  top: 6px;
  left: -8px;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 16px solid var(--sexy-text-color);
}
.join-link:hover + .explanation-text {
  visibility: visible;
  opacity: 1;
}
</style>
