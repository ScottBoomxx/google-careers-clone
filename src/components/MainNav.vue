<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-soli border-brand-gray-1"
      >
        <a
          :href="url"
          class="flex items-center h-full text-[22px] text-[#5f6368]"
          >{{ company }}</a
        >
        <nav class="h-full ml-12">
          <ul
            class="flex h-full p-0 m-0 list-none text-[#5f6368] hover:text-[#202124]"
          >
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full ml-9 first:ml-0 text-[#5f6368] hover:text-[#202124]"
              data-test="main-nav-list-item"
            >
              <a href="" class="flex items-center h-full py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <action-button />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
  },
  data() {
    return {
      company: "Google Careers",
      url: "http://localhost:8081/",
      menuItems: ["Teams", "Locations", "Benefits", "Jobs", "Students"],
    };
  },
};
</script>
