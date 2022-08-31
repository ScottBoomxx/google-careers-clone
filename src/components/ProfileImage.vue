<template>
  <img
    :src="imageLink"
    :alt="imageDescription"
    class="w-8 h-8 object-contain rounded-xl"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy20OLr_4RscxSP5Sj7wA9LNzGSvfMbC8a0Q&usqp=CAU",
      imageDescription: "a photo of mr peanutbutter",
    };
  },
};
</script>
