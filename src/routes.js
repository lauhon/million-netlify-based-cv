const App = () => import("./pages/App.vue");
const Certifications = () => import("./pages/Certifications.vue");
const SkillsAndAspirations = () => import("./pages/SkillsAndAspirations.vue");

export default {
  "/": App,
  "/home": App,
  "/certifications": Certifications,
  "/skills-and-aspirations": SkillsAndAspirations,
};
