<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "primary",
      required: false,
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
button {
  @apply px-[18px] py-[9px] font-medium text-[12px] rounded;
}
.primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue;
}

.secondary {
  @apply text-brand-blue-2 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
