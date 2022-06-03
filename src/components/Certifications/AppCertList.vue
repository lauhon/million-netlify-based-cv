<template>
  <ul class="cert-list">
    <li>
      <a
        href="https://education.oracle.com/oracle-certified-associate-java-se-8-programmer/trackp_333"
        target="_blank"
        ><img
          class="cert-icon"
          src="./java.png"
          alt="Java Professional Associate"
      /></a>
    </li>
    <li>
      <a
        href="https://www.scrum.org/professional-scrum-developer-certification"
        target="_blank"
        ><img class="cert-icon" src="./badge-psdi.svg" alt="Scrum Developer"
      /></a>
    </li>
    <li>
      <a
        href="https://www.scrum.org/professional-scrum-master-i-certification"
        target="_blank"
        ><img class="cert-icon" src="./badge-psmi.svg" alt="Scrum Master"
      /></a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.cert-icon {
  height: 4.2rem;
}

.cert-list {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin-top: 80px;

  &__item {
  }
}
</style>
