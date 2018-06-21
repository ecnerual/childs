<template>
  <div class="home">
    <ul>
      <li v-for="kid in kids">
        {{ kid.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import Kid from '@/components/Kid.vue'
import { mapState } from 'vuex'

export default {
  name: 'kids',
  computed: mapState(['kids']),
  components: {
    Kid
  }
}
</script>

