---
layout: page
---

<script setup lang="ts">
import Container from '/@theme/components/Topic/TopicPageContainer.vue'
import NormalItem from "/@theme/components/List/NormalItem.vue"
import { getLinuxData } from '/@theme/data'

const props = {
  title: "Linux",
  subTitle: "Articles"
}

const data = getLinuxData()
</script>

<Container v-bind="props">
  <NormalItem v-for="item in data" :key="item.id" v-bind="item" />
</Container>
