<template>
  <g>
    <app-jet x="850" y="-400" xSmall="150" ySmall="-450" />
    <app-text
      x="1150"
      y="-200"
      xSmall="75"
      ySmall="60"
      url-slug="https://www.sz-ybbs.ac.at/schulzentrum/it-htl"
    >
      <template v-slot:date>Sep 2012</template>
      <template v-slot:event>IT-Education start at </template>
      <template v-slot:event2>IT-HTL Ybbs a. d. Donau</template>
    </app-text>

    <app-tree x="1100" y="50" />
    <app-deploypreview x="1100" y="150" xSmall="100" ySmall="320" />

    <app-bush />
    <app-streetlamp2 />
    <app-text
      x="1500"
      y="100"
      xSmall="75"
      ySmall="650"
      url-slug="https://www.sz-ybbs.ac.at/fuer-interessenten/htl-medientechnik"
    >
      <template v-slot:date>June 2017</template>
      <template v-slot:event>Graduation with main emphasis</template>
      <template v-slot:event2>on media technology</template>
    </app-text>

    <app-tree x="750" y="300" />
    <app-tree x="800" y="320" />
    <app-tree x="700" y="350" />

    <app-github ySmall="920" />
    <app-tree x="1050" y="620" />

    <app-text
      x="200"
      y="700"
      xSmall="75"
      ySmall="1300"
      num="2"
      url-slug="https://www.noe.lebenshilfe.at/"
      width="105"
    >
      <template v-slot:date>Sep, 2017 - May, 2018</template>
      <template v-slot:event>Community Service at</template>
      <template v-slot:event2>Lebenshilfe NÖ</template>
    </app-text>

    <!-- <app-letsencrypt x="1020" y="620" xSmall="100" ySmall="920" /> -->

    <app-auditlogs x="1020" y="620" xSmall="100" ySmall="1600" />

    <app-text
      x="1250"
      y="650"
      xSmall="75"
      ySmall="2000"
      num="3"
      url-slug="https://www.accenture.com/at-de"
    >
      <template v-slot:date>Sept 2018</template>
      <template v-slot:event>Start to Work at Accenture</template>
      <template v-slot:event2>as Application Developer</template>
    </app-text>

    <app-streetlamp1 x="1450" y="950" />
    <app-bush x="1350" y="1250" />

    <app-build-plugins x="700" y="950" xSmall="50" ySmall="2300" />

    <app-text
      x="1180"
      y="1050"
      xSmall="75"
      ySmall="2750"
      num="4"
      url-slug="/certifications"
      target="_self"
    >
      <template v-slot:date>Nov 2018</template>
      <template v-slot:event>Completing Jumpstart at Accenture</template>
      <template v-slot:event2>and getting certifications</template>
    </app-text>
    <app-tree x="600" y="1050" />
    <app-bush x="800" y="1350" />

    <app-netlifycms x="350" y="1350" xSmall="100" ySmall="3050" />

    <app-text
      x="50"
      y="1280"
      xSmall="75"
      ySmall="3450"
      num="5"
      url-slug="https://github.com/lauhon/WalletPOC"
    >
      <template v-slot:date>May 2022</template>
      <template v-slot:event>Starting to work self-employed on</template>
      <template v-slot:event2>Cryptography leveraging Projects</template>
    </app-text>

    <app-streetlamp2 x="100" y="1550" />
    <app-bush x="0" y="1700" />
    <app-bush x="50" y="1750" />

    <app-deploybutton x="220" y="1850" xSmall="100" ySmall="3750" />
    <app-text
      x="750"
      y="1900"
      xSmall="75"
      ySmall="4200"
      num="5"
      url-slug="/skills-and-aspirations"
      target="_self"
    >
      <template v-slot:date>Onwards</template>
      <template v-slot:event>The Future will bring more. Click here </template>
      <template v-slot:event2
        >to learn about my skills and aspirations</template
      >
    </app-text>
  </g>
</template>

<script>
//repeated elements
import AppBush from "@/components/Home/AppBush.vue";
import AppStreetlamp1 from "@/components/Home/AppStreetlamp1.vue";
import AppStreetlamp2 from "@/components/Home/AppStreetlamp2.vue";
import AppText from "@/components/Home/AppText.vue";
import AppTree from "@/components/Home/AppTree.vue";

export default {
  components: {
    AppText,
    AppTree,
    AppBush,
    AppStreetlamp1,
    AppStreetlamp2,
    AppJet: () =>
      import(/* webpackPrefetch: true */ "@/components/Home/AppJet.vue"),
    AppGithub: () =>
      import(/* webpackPrefetch: true */ "@/components/Home/AppGithub.vue"),
    AppAuditlogs: () =>
      import(/* webpackPrefetch: true */ "@/components/Home/AppAuditlogs.vue"),
    AppDeploybutton: () =>
      import(
        /* webpackPrefetch: true */ "@/components/Home/AppDeploybutton.vue"
      ),
    AppDeploypreview: () =>
      import(
        /* webpackPrefetch: true */ "@/components/Home/AppDeploypreview.vue"
      ),
    AppBuildPlugins: () =>
      import(
        /* webpackPrefetch: true */ "@/components/Home/AppBuildPlugins.vue"
      ),
    AppNetlifycms: () =>
      import(/* webpackPrefetch: true */ "@/components/Home/AppNetlifycms.vue"),
  },
};
</script>

<style lang="scss" scoped></style>
