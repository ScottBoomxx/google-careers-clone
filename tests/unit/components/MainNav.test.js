import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);

    expect(wrapper.text()).toMatch("Google Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());

    console.log(navigationMenuItems);
    console.log(navigationMenuTexts);

    expect(navigationMenuTexts).toEqual([
      "Sports",
      "Politics",
      "Technology",
      "Science",
      "Economy",
    ]);
  });

  // describe("when use is logged out", () => {
  //   it("prompts user to sign in", () => {
  //     const wrapper = mount(MainNav, {
  //       data() {
  //         return {
  //           isLoggedIn: false,
  //         };
  //       },
  //     });
  //     const loginButton = wrapper.findComponent({ name: "ActionButton" });
  //     const profileImage = wrapper.findComponent({ name: "ProfileImage" });

  //     expect(loginButton.exists()).toBe(true);
  //     expect(profileImage.exists()).toBe(false);
  //   });
  // });

  // describe("when use is logged in", () => {
  //   it("displays user profile picture", () => {
  //     const wrapper = mount(MainNav, {
  //       data() {
  //         return {
  //           isLoggedIn: true,
  //         };
  //       },
  //     });
  //     const loginButton = wrapper.findComponent({ name: "ActionButton" });
  //     const profileImage = wrapper.findComponent({ name: "ProfileImage" });

  //     expect(loginButton.exists()).toBe(false);
  //     expect(profileImage.exists()).toBe(true);
  //   });
  // });

  describe("when use is logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = mount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");

      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when use is logged in", () => {
    it("displays user profile picture", async () => {
      const wrapper = mount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
  });
});
